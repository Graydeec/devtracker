import { createClient } from "@/lib/supabase";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// type ProjectStatus = "planning" | "in-progress" | "completed";

// interface Project {
//   id: string;
//   name: string;
//   description: string | null;
//   status: ProjectStatus;
// }

export async function GET() {
  try {
    // 1. Check if the user is authenticated in the Clerk
    const { userId } = await auth();

    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    // 2. Initialize the Supabase client with the user's token
    const supabase = await createClient();

    // 3. Fetch Data
    // RLS handles the "where user_id = userId" filter automatically
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) {
      console.log("Supabase Error: ", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    //     const { searchParams } = new URL(request.url)
    // const status = searchParams.get('status')
    // const page   = Number(searchParams.get('page')  ?? 1)
    // const limit  = Number(searchParams.get('limit') ?? 10)
    // const from   = (page - 1) * limit
    // const to     = from + limit - 1

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 },
      );
    }

    const { name, description, status } = body as {
      name?: unknown;
      description?: unknown;
      status?: unknown;
    };

    if (typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Project name is required" },
        { status: 400 },
      );
    }

    if (description != null && typeof description !== "string") {
      return NextResponse.json(
        { error: "Project description must be a string" },
        { status: 400 },
      );
    }

    const allowedStatuses = ["planning", "in-progress", "completed"] as const;
    if (
      status != null &&
      (typeof status !== "string" ||
        !allowedStatuses.includes(status as (typeof allowedStatuses)[number]))
    ) {
      return NextResponse.json(
        { error: "Invalid project status" },
        { status: 400 },
      );
    }

    const supabase = await createClient();

    const { data, error } = await supabase
      .from("projects")
      .insert({
        name: name.trim(),
        description: description ?? null,
        ...(status == null ? {} : { status }),
        user_id: userId,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

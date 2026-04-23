import { createClient } from "@/lib/supabase";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const input = body as {
      name?: unknown;
      description?: unknown;
      status?: unknown;
    };

    const updates: {
      name?: string;
      description?: string | null;
      status?: "planning" | "in-progress" | "completed";
    } = {};

    if ("name" in input) {
      if (typeof input.name !== "string" || !input.name.trim()) {
        return NextResponse.json(
          { error: "Project name is required" },
          { status: 400 },
        );
      }
      updates.name = input.name.trim();
    }

    if ("description" in input) {
      if (input.description != null && typeof input.description !== "string") {
        return NextResponse.json(
          { error: "Project description must be a string" },
          { status: 400 },
        );
      }
      updates.description = input.description ?? null;
    }

    if ("status" in input) {
      const allowedStatus = ["planning", "in-progress", "completed"] as const;
      if (
        typeof input.status !== "string" ||
        !allowedStatus.includes(input.status as (typeof allowedStatus)[number])
      ) {
        return NextResponse.json(
          { error: "Invalid project status" },
          { status: 400 },
        );
      }
      updates.status = input.status as (typeof allowedStatus)[number];
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: "No valid fields provided" },
        { status: 400 },
      );
    }

    const { id } = await params;

    const supabase = await createClient();

    const { data, error } = await supabase
      .from("projects")
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq("user_id", userId)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id)
      .eq("user_id", userId)
      .select("id")
      .maybeSingle();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Deleted successfully" });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

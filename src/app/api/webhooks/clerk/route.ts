import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";

/**
 * Clerk Webhook Handler: user.created
 * * This endpoint receives a 'user.created' event from Clerk via Svix webhooks.
 * It verifies the authenticity of the request and synchronizes the new user
 * identity into the Supabase `profiles` table.
 * * @param {Request} req - The incoming raw request object from Clerk/Svix.
 * @returns {Promise<Response>} - A 200 response on success, or a 400/500 on verification/DB failure.
 * * @requires CLERK_WEBHOOK_SECRET - Used to verify the Svix signature.
 * @requires NEXT_PUBLIC_SUPABASE_URL - The project URL for Supabase.
 * @requires SUPABASE_SERVICE_ROLE_KEY - Admin key to bypass RLS for initial profile creation.
 * * @table public.profiles
 * @mapping
 * - id: Clerk User ID (string)
 * - email: Primary email address from Clerk
 * - full_name: Combined first and last name
 * - avatar_url: Clerk-hosted profile image URL
 */
export async function POST(req: Request) {
  // 1. Get the headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", { status: 400 });
  }

  //   2. Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  //   3. Verify the signature (Security!)
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    return new Response("Error occured", { status: 400 });
  }

  //   4. Initialize Supabase Admin (Use Sevice Role Key!)
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );

  const eventType = evt.type;

  if (eventType === "user.created") {
    const { id, email_addresses, image_url, first_name, last_name } = evt.data;
    console.log(id);
    console.log(email_addresses[0].email_address);
    console.log(image_url);
    console.log(`{first_name} ${last_name}`);
    const { error } = await supabase.from("profiles").insert({
      id: id,
      email: email_addresses[0].email_address,
      first_name: first_name,
      last_name: last_name,
      avatar_url: image_url,
    });
    if (error) return new Response("Error creating profile", { status: 500 });
  }

  return new Response("", { status: 200 });
}

// TODO: Implement endpoint to handle user.updated

// TODO: Implement endpoint to handle user.deleted

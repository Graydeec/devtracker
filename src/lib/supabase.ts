import { auth } from "@clerk/nextjs/server";
import { createBrowserClient } from "@supabase/ssr";

export async function createClient() {
  const { getToken } = await auth();

  // Retrieve the token with the 'supabase' template (if configured)
  // or the default integration token.
  const token = await getToken();

  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      global: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    },
  );
}

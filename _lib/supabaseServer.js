// @/_lib/supabaseServer.js
import { createClient } from "@supabase/supabase-js";
import { auth } from "@/_lib/auth";

export async function createServerSupabase() {
  const session = await auth();
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);
  if (session?.access_token && session?.refresh_token) {
    await supabase.auth.setSession({
      access_token: session.access_token,
      refresh_token: session.refresh_token,
    });
  }

  return supabase;
}

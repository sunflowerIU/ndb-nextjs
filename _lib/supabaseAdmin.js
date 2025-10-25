import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SERVICE_ROLE;
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

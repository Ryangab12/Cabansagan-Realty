import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Supabase URL and Anon Key are required. Please check your environment variables.",
  );
}
export const supabase = createSupabaseClient(supabaseUrl, supabaseAnonKey);

export function createClient() {
  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}

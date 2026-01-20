import { createClient } from "@supabase/supabase-js";

let _supabase = null;

export function getSupabase() {
  if (_supabase) return _supabase;

  const cfg = typeof window !== "undefined" ? window.__APP_CONFIG__ : null;
  const url = cfg?.SUPABASE_URL;
  const key = cfg?.SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.error("Supabase config missing. Check /config.js and scripts injection.");
    return null;
  }

  _supabase = createClient(url, key);
  return _supabase;
}

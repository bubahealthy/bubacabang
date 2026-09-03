import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Missing Supabase environment variables! Check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file or hosting provider settings."
  );
}

// Use placeholder credentials if actual variables are missing to prevent initialization crash
const url = supabaseUrl || "https://eqavwjeotlmfbwobtmyf.supabase.co";
const key = supabaseAnonKey || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxYXZ3amVvdGxtZmJ3b2J0bXlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgzODg1MTgsImV4cCI6MjEwMzk2NDUxOH0.5zgnPJiOL7XVXnI8p2WEtdnKRai7nvKav0_eBZjsQQA";

export const supabase = createClient(url, key);

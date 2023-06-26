import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ubgmvfalpodfhaalegdl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViZ212ZmFscG9kZmhhYWxlZ2RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcxMDY0MzUsImV4cCI6MjAwMjY4MjQzNX0.LY3tts9webK3AIZu5IPvNYvY8MpgCQANM5_a76JQy3s"
);

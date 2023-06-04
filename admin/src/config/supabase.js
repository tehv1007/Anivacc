import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://rxtqfewjikyslunondlw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4dHFmZXdqaWt5c2x1bm9uZGx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU2MDkxNzEsImV4cCI6MjAwMTE4NTE3MX0.w0BEUWnhTOpKdvcZ1gSyUtiuh-H1nVX0opOT6K-nkis"
);

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uudwbnyghnwkqeleiviy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1ZHdibnlnaG53a3FlbGVpdml5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzODYyOTEsImV4cCI6MjAyNDk2MjI5MX0.ycxUkuLJSImIGkKAtZu8CBH0dGaTlZKDZH9pjPO-4wE";
export const supabase = createClient(supabaseUrl, supabaseKey);

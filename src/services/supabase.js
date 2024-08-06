import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sfqcmcflbdswdcdwovtx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmcWNtY2ZsYmRzd2RjZHdvdnR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3MjcwMDMsImV4cCI6MjAzODMwMzAwM30.k4qqgCmeP9ga5K8BTU_pKcFKXG2DNGs_mWoToQ1W86w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

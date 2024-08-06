import { createClient } from "@supabase/supabase-js";
import.meta.env;

const supabaseUrl = "https://sfqcmcflbdswdcdwovtx.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

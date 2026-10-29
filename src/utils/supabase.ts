import { createClient } from "@supabase/supabase-js";

// .env.local에 들어있는 Supabase URL을 가져와서 Supabase 클라이언트를 생성합니다.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// .env.local에 들어있는 Supabase Key를 가져와서 Supabase 클라이언트를 생성합니다.
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// Supabase 통신을 하는 클라이언트를 생성합니다.
export const supabase = createClient(supabaseUrl, supabaseKey);

import { createClient } from '@supabase/supabase-js';

// Reemplaza con tus datos de Supabase
const SUPABASE_URL = 'https://wzuofxmxelrihdnwdflx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6dW9meG14ZWxyaWhkbndkZmx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NjkwNzAsImV4cCI6MjA1MDA0NTA3MH0.qm9JhncdD5HflKnk8PlBEbbJE815wARgj5oWwX57ar4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
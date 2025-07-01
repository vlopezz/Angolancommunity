import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hxpyzzofyiduzugpxujk.supabase.co'; // Substitua pelo seu Project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4cHl6em9meWlkdXp1Z3B4dWprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMDc3NDYsImV4cCI6MjA2NjY4Mzc0Nn0.FTzl9xSPcOK1dMCxxVoIS39VqmYWG-fh0S2ZSFNWMlI'; // Substitua pela sua Anon Public Key
export const supabase = createClient(supabaseUrl, supabaseKey);
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ztfhhzlwtvpqhbnqeasm.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0Zmhoemx3dHZwcWhibnFlYXNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg3Mzg0NDEsImV4cCI6MjEwNDMxNDQ0MX0.7EftrvkNC75S8Jy_pXMQArXHfRGtkoHCr2Il30Dpv7E';

export const supabase = createClient(
  supabaseUrl.startsWith('http') ? supabaseUrl : `https://${supabaseUrl}`,
  supabaseAnonKey
);
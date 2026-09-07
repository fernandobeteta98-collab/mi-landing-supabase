import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ztfhhzlwtvpqhbnqeasm.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0Zmhoemx3dHZwcWhibnFlYXNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg3Mzg0NDEsImV4cCI6MjEwNDMxNDQ0MX0.7EftrvkNC75S8Jy_pXMQArXHfRGtkoHCr2Il30Dpv7E';

// Asegura que la URL nunca esté vacía o mal formada durante el build
const validUrl = SUPABASE_URL.startsWith('http') ? SUPABASE_URL : `https://${SUPABASE_URL}`;

export const supabase = createClient(validUrl, SUPABASE_ANON_KEY);
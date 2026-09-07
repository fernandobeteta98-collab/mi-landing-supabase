import { createClient } from '@supabase/supabase-js';

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const rawKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Limpia cualquier comilla, espacio o barra al final que venga de Vercel
const cleanUrl = rawUrl.replace(/["'\s]/g, '').replace(/\/$/, '');
const cleanKey = rawKey.replace(/["'\s]/g, '');

const finalUrl = (cleanUrl && cleanUrl.startsWith('http')) 
  ? cleanUrl 
  : 'https://ztfhhzlwtvpqhbnqeasm.supabase.co';

const finalKey = cleanKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0Zmhoemx3dHZwcWhibnFlYXNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg3Mzg0NDEsImV4cCI6MjEwNDMxNDQ0MX0.7EftrvkNC75S8Jy_pXMQArXHfRGtkoHCr2Il30Dpv7E';

export const supabase = createClient(finalUrl, finalKey);
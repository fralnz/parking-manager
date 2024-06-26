import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yuyyujadubndgfpxauug.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1eXl1amFkdWJuZGdmcHhhdXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NjA4MzUsImV4cCI6MjAzMzIzNjgzNX0.V8bBPKuA3fXB10LcA1inEJRDAv96y-ePQaNdpaKO0yo";
export const supabase = createClient(supabaseUrl, supabaseKey)

/* if (typeof supabase !== 'undefined') {
    const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
} else {
    console.error('Supabase library is not loaded.');
}

const {data, error} = await supabase  
    .from('tipi_segnalazione')
    .insert({
        { some_column: 'someValue'}
        {some_column: 'otherValue'}
    }) */

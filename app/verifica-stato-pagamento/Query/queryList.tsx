import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yuyyujadubndgfpxauug.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1eXl1amFkdWJuZGdmcHhhdXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NjA4MzUsImV4cCI6MjAzMzIzNjgzNX0.V8bBPKuA3fXB10LcA1inEJRDAv96y-ePQaNdpaKO0yo'
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey)

async function checkUser (matricola: string, password:string){
    let { data, error } = await supabase
        .from('tipo_veicoli')
        .select('targa')
        .eq("matricola", matricola)
        .eq("password", password);

    console.log("data", data);
    console.log("error", error);
}
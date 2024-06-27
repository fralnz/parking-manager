/* import { useState } from 'react'
import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yuyyujadubndgfpxauug.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1eXl1amFkdWJuZGdmcHhhdXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NjA4MzUsImV4cCI6MjAzMzIzNjgzNX0.V8bBPKuA3fXB10LcA1inEJRDAv96y-ePQaNdpaKO0yo'
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey)

const [loginCheck, loginCheck_set] = useState(null);

async function checkUser (matricola: string, password:string){
    let { data, error } = await supabase
        .from('forze_ordine')
        .select('id')
        .eq("matricola", matricola)
        .eq("password", password);
    if(data.length>0){
        loginCheck_set(true);
    }else{
        loginCheck_set(false);
    }
}

export {checkUser, loginCheck}; */
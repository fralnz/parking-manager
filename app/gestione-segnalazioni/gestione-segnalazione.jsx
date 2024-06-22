import { createClient } from "@supabase/supabase-js";

export default function Test(){
    return(
        <div>
        Lol
        <h1>Lmao</h1>
        <h2>ok</h2>
        </div>
    )

}

// URL del tuo progetto Supabase e la chiave pubblica API
/* const supabaseUrl = 'https://yuyyujadubndgfpxauug.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1eXl1amFkdWJuZGdmcHhhdXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NjA4MzUsImV4cCI6MjAzMzIzNjgzNX0.V8bBPKuA3fXB10LcA1inEJRDAv96y-ePQaNdpaKO0yo';
const supabaseClient = createClient(supabaseUrl, supabaseKey); */

// Verifica che Supabase sia disponibile come global
/*
if (typeof supabase !== 'undefined') {
    const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
} else {
    console.error('Supabase library is not loaded.');
}
*/

// Esempio di funzione per ottenere dati da una tabella
/* async function getData() {     
    let { data, error } = await supabaseClient
        .from('Studenti')
        .select('Cognome');
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Data:', data);
        // Mostra i dati nella pagina web
        document.getElementById('content').innerHTML = JSON.stringify(data, null, 2);
    }
} */

// Chiamare la funzione per ottenere i dati
/* getData();

function invia() {
 
    var v_nome=document.getElementById("nome").value
    insData();

    async function insData() {     
        //alert(v_nome);
        const { dataIns, errorIns } = await supabaseClient
            .from('Test')
            .insert([
            { id: int8 },
        ])
        .select()
        window.location.reload();
    }
} */
import {createClient} from "@supabase/supabase-js";
import {Text} from "native-base";

const supabaseUrl = "https://yuyyujadubndgfpxauug.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1eXl1amFkdWJuZGdmcHhhdXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NjA4MzUsImV4cCI6MjAzMzIzNjgzNX0.V8bBPKuA3fXB10LcA1inEJRDAv96y-ePQaNdpaKO0yo";

const supabase = createClient(supabaseUrl, supabaseKey);

const test = async () => {
    let {data: utenti, error} = await supabase
        .from('utente')
        .select('*')
    console.log("UTENTI", utenti)
}

const Statistica = () => {
    test()
    return (
        <>
            <Text>Statistica</Text>
        </>
    )
}
export default Statistica
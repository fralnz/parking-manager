import React, {useState, useEffect} from "react";
import { router, Stack } from "expo-router";
import {Text, View, Button, FlatList, Alert} from "react-native";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yuyyujadubndgfpxauug.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1eXl1amFkdWJuZGdmcHhhdXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NjA4MzUsImV4cCI6MjAzMzIzNjgzNX0.V8bBPKuA3fXB10LcA1inEJRDAv96y-ePQaNdpaKO0yo";
const supabase = createClient(supabaseUrl, supabaseKey);

//Questo componente riempie la tabella "tipi_notifiche"
const InserimentoDati = () => {
  useEffect(() => {
    const addData = async () => {
      const { data, error } = await supabase
        .from('tipi_notifiche')
        .insert([
          { descrizione: 'Parcheggi ostruiti a causa di un evento di comunità in luogo.' },
          { descrizione: 'Parcheggi ostruiti a causa di lavori in corso in luogo.' },
          { descrizione: 'Divieto di sosta speciale vigente temporaneamente in luogo.' },
          { descrizione: 'Il veicolo parcheggiato in luogo è stato rimosso forzatamente.' },
          { descrizione: 'Mancato pagamento del parcheggio per il veicolo in sosta in luogo.' },
          { descrizione: 'Il sistema è sotto manutenzione e il nostro servizio sarà nuovamente disponibile a breve. Ci scusiamo per qualsiasi inconveniente.' },
          { descrizione: 'Congratulazioni! Hai ricevuto uno sconto utilizzabile per un parcheggio a pagamento. Grazie per il tuo contributo con le segnalazioni.' },
        ]);

      if (error) {
        console.error('Errore inserimento dei dati:', error);
      } else {
        console.log('Dati dei tipi di notifiche inseriti:', data);
      }
    };

    addData();
  }, []); 

  return (
    <View>
      <Text>Inserimento dati in corso...</Text>
    </View>
  );
};

//Questo componente presenta a schermo la scelta delle varie notifiche
const SceltaNotifiche = () => {

    const [notifScelta, setNotifScelta] = useState(null)

    const listaNotif= [
        {id: '1', title: 'Evento comunità'},
        {id: '2', title: 'Lavori in corso'},
        {id: '3', title: 'Divieto di sosta speciale'},
        {id: '4', title: 'Rimozione forzata'},
        {id: '5', title: 'Mancato pagamento'},
        {id: '6', title: 'Manutenzione sistema'},
        {id: '7', title: 'Premio ricevuto'},
    ]

    const handleScelta = (scelta) => {
        setNotifScelta(scelta);
        Alert.alert('Hai scelto:', scelta.title);
    };

    const renderScelta = ({ item }) => (
        <View style={{ marginVertical: 5 }}>
        <Button title={item.title} onPress={() => handleScelta(item)} />
        </View>
    );

    return(
        <View style={{ padding: 20 }}>
            <Text style={{ marginBottom: 10 }}>Invia una notifica</Text>
            <FlatList
                data={listaNotif}
                renderItem={renderScelta}
                keyExtractor={(object) => object.id}
                extraData={notifScelta}
            />
             {notifScelta && (
        <Text style={{ marginTop: 20 }}>Hai scelto: {notifScelta.title}</Text>
      )}

        </View>
    )
}

export default {SceltaNotifiche, InserimentoDati}


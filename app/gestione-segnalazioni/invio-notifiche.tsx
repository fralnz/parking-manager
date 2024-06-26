import React, {useState} from "react";
import { router, Stack } from "expo-router";
import {TextInput, Text, View, Button, FlatList, Alert} from "react-native";
import { createClient } from '@supabase/supabase-js';

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

    const renderScelta = ({ oggetto }) => (
        <View style={{ marginVertical: 5 }}>
        <Button title={oggetto.title} onPress={() => handleScelta(oggetto)} />
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

        </View>
    )
}


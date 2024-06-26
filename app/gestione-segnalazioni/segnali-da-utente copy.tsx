import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Dialog, Portal, Button, TextInput, Provider } from 'react-native-paper';
import { supabase } from './supabaseClient'; // Assicurati di avere il percorso corretto

export default function MenuNotificaDaUtente() {
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [inputText, setInputText] = useState("");
    const [receivedMessage, setReceivedMessage] = useState("");
    const [selectedItem, setSelectedItem] = useState("");

    // Gestione dell'invio dell'input
    const handleSubmit = async () => {
        console.log('Inizio submit');
        console.log('Selected Item:', selectedItem);
        console.log('Input Text:', inputText);

        try {
            // Ottieni l'id del tipo di segnalazione dalla tabella `tipi_segnalazione`
            const { data: tipoData, error: tipoError } = await supabase
                .from('tipi_segnalazione')
                .select('id')
                .eq('descrizione', selectedItem)
                .single();

            if (tipoError || !tipoData) {
                console.error('Errore nel trovare il tipo di segnalazione:', tipoError);
                throw tipoError || new Error('Tipo di segnalazione non trovato');
            }

            const idTipoSegnalazione = tipoData.id;
            console.log('ID Tipo Segnalazione:', idTipoSegnalazione);

            // Inserisci la segnalazione nella tabella `segnalazione_utente`
            const { error: segnalazioneError } = await supabase
                .from('segnalazione_utente')
                .insert([{ 
                    testo: inputText, 
                    id_tipo_segnalazione: idTipoSegnalazione 
                }]);

            if (segnalazioneError) {
                console.error('Errore nel salvare la segnalazione:', segnalazioneError);
                throw segnalazioneError;
            }

            console.log('Segnalazione salvata con successo');
            setReceivedMessage(inputText); // Imposta il messaggio ricevuto
            setIsDialogVisible(false);
            setInputText(""); // Resetta il testo dell'input

            // Rimuove il messaggio dopo 2 secondi
            setTimeout(() => {
                setReceivedMessage("");
            }, 2000); // 2000 millisecondi = 2 secondi
        } catch (error) {
            console.error('Errore durante il submit:', error);
        }
    };

    // Elementi di segnalazione, verranno forniti dal database.
    const reportItems = [
        "Parcheggio Ostruito",
        "Evento Eccezionale",
        "Situazione di Emergenza",
        "Zona a traffico limitato non-segnalata",
        "Questi sono solo esempi lol",
        "Altro"
    ];

    return (
        <Provider>
            <View>
                <Text>Che cosa vuoi segnalare?</Text>
                {/*STILE DA FARE*/}
                {reportItems.map((item, index) => (
                    <Pressable key={index} onPress={() => {
                        setSelectedItem(item);
                        setIsDialogVisible(true);
                    }}>
                        <Text>{item}</Text>
                    </Pressable>
                ))}

                {/* Mostra il messaggio ricevuto */}
                {receivedMessage ? (
                    <View style={{ padding: 10, marginTop: 20, backgroundColor: '#e0e0e0' }}>
                        <Text>Input ricevuto! Grazie per il tuo contributo!</Text>
                    </View>
                ) : null}

                <Portal>
                    <Dialog visible={isDialogVisible} onDismiss={() => setIsDialogVisible(false)}>
                        <Dialog.Title>Spiega la tua situazione</Dialog.Title>
                        <Dialog.Content>
                            <TextInput
                                label="Scrivere qui"
                                value={inputText}
                                onChangeText={text => setInputText(text)}
                            />
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => {
                                console.log('Chiusura dialog');
                                setIsDialogVisible(false);
                            }}>Chiudi</Button>
                            <Button onPress={() => {
                                console.log('Invio dati');
                                handleSubmit();
                            }}>Invia</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        </Provider>
    );
}

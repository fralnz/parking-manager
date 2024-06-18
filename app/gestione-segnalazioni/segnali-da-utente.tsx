import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Dialog, Portal, Button, TextInput, Provider } from 'react-native-paper';

export default function MenuNotificaDaUtente() {
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [inputText, setInputText] = useState("");
    const [receivedMessage, setReceivedMessage] = useState("");

    // Gestione dell'invio dell'input
    const handleSubmit = () => {
        setReceivedMessage(inputText); // Imposta il messaggio ricevuto
        setIsDialogVisible(false);
        setInputText(""); // Resetta il testo dell'input

        // Rimuove il messaggio dopo 2 secondi
        setTimeout(() => {
            setReceivedMessage("");
        }, 2000); // 2000 millisecondi = 2 secondi
    };

    // Elementi di segnalazione, verranno forniti dal database.
    const reportItems = [
        "Parcheggio Ostruito",
        "Evento Eccezionale",
        "Situazione di Emergenza",
        "C'è il Pride e voglio che ce ne sia di più",
        "Questi sono solo esempi lol",
        "Altro"
    ];

    return (
        <Provider>
            <View>
                <Text>Che cosa vuoi segnalare?</Text>
                {/*STILE DA FARE*/}
                {reportItems.map((item, index) => (
                    <Pressable key={index} onPress={() => setIsDialogVisible(true)}>
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
                            <Button onPress={() => setIsDialogVisible(false)}>Chiudi</Button>
                            <Button onPress={handleSubmit}>Invia</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        </Provider>
    );
}

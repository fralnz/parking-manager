import React, { useState } from "react";
import { View, Text, Pressable, Alert } from "react-native";
import DialogInput from 'react-native-dialog-input';

export default function MenuNotificaDaUtente() {
    const [isDialogVisible, setIsDialogVisible] = useState(false);

    const handleSubmit = (inputText: string) => {
        Alert.alert("Input ricevuto", inputText);
        setIsDialogVisible(false);
    };

    return (
        <View>
            <Text>Che cosa vuoi segnalare?</Text>
            <Pressable onPress={() => setIsDialogVisible(true)}>
                <Text>Parcheggio Ostruito</Text>
            </Pressable>
            <Pressable onPress={() => setIsDialogVisible(true)}>
                <Text>Evento Eccezionale</Text>
            </Pressable>
            <Pressable onPress={() => setIsDialogVisible(true)}>
                <Text>Situazione di Emergenza</Text>
            </Pressable>
            <Pressable onPress={() => setIsDialogVisible(true)}>
                <Text>C'è il Pride e voglio che ce ne sia di più</Text>
            </Pressable>
            <Pressable onPress={() => setIsDialogVisible(true)}>
                <Text>Questi sono solo esempi lol</Text>
            </Pressable>
            <Pressable onPress={() => setIsDialogVisible(true)}>
                <Text>Altro</Text>
            </Pressable>
            <DialogInput 
                isDialogVisible={isDialogVisible}
                title={"Spiega la tua situazione"}
                hintInput={"Scrivere qui"}
                submitInput={(inputText) => handleSubmit(inputText)}
                closeDialog={() => setIsDialogVisible(false)}
            />
        </View>
    );
}

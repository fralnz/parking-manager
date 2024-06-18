import { View, Text, Button, Pressable } from "react-native-web";
import { router } from "expo-router"
import React from "react";

export default function MenuNotificaDaUtente(){
    return(
        <View>
        <Text>Che cosa vuoi segnalare?</Text>
        <Pressable onPress={alert("Segnalazione fatta! Grazie per il contributo!")}>
            <Text>Parcheggio Ostruito</Text>
        </Pressable>
        
        <Text onPress="Inserire feedback:">Altro</Text>
        
        </View>
    )

}
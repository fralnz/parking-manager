import React from "react";
import { router } from "expo-router"
import {TextInput, Text, View, Button} from "react-native";

export default function Test(){
    return(
        <View>
        <Button onPress={() => router.push("./segnali-da-utente")} title={'SENDTO NEXT PAGE'}/>
        <Button onPress={() => router.push("./cronologia-notifiche")} title={'NOTIFICHE'}/>
        </View>
    )

}
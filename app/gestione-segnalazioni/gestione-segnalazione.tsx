import React from "react";
import { router } from "expo-router"
import {TextInput, Text, View, Button} from "react-native";

export default function Test(){
    return(
        <View>
        <Button onPress={() => router.push("./segnalazioni-da-utente")} title={'SENDTO NEXT PAGE'}/>
        </View>
    )

}
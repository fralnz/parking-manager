import React, {useState} from "react";
import {TextInput, Text, StyleSheet, View, TouchableOpacity, Button} from "react-native";
import {Dropdown, styles} from "@/app/flusso-pagamento/Components/ListaTarghe";
import {router} from "expo-router";


const firstPage = () => {
    const handleSelect = (option: string) => {
    };
    return (
        <View style={styless.container}>
            <Text style={styless.text}>Seleziona la targa dell'auto parcheggiata: </Text>
            <Dropdown options={['AA 000 AA', 'AA 000 AB', 'AA 000 AC']} onSelect={handleSelect}/>
            <Text style={[styless.text]}>Inserisci una nuova targa: </Text>
            <TextInput style={[styles.dropdownButton, styles.dropdownButtonText, styless.textCenter]}
                       placeholder="AA 000 AA"/>
            <TouchableOpacity style={styless.nextBtn} onPress={() => router.push("/flusso-pagamento/Pagina-2" )}>
                <Text style={{color: "white"}} >Prosegui</Text>
            </TouchableOpacity>
        </View>
    )
}
export default firstPage

const styless = StyleSheet.create({
    container: {
        top: 50,
        alignItems: 'center',
        gap: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: "grey",
        color: "black",
        borderRadius: 6
    },
    text: {
        fontSize: 32,
        color: "black"
    },
    nextBtn: {
        top: 100,
        padding: 12,
        backgroundColor: '#155e85',
        borderRadius: 6
    },
    textCenter: {
        textAlign: "center",
        fontSize: 20,
        padding: 8,

    }
})
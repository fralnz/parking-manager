import React from "react";
import {TextInput, Text, View, StyleSheet} from "react-native"

const firstPage = () => {
    return (
        <View>
            <Text>Seleziona la targa dell'auto parcheggiata:</Text>
            <View style={styles.container}>
                <Text style={styles.text}>Inserisci una nuova targa:</Text>
                <TextInput style={styles.text} placeholder="AA000AA"/>
                <hr></hr>
                <button>Prosegui</button>
            </View>
        </View>
    )
}

export default firstPage

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    text: {
        color: "white"
    }
})
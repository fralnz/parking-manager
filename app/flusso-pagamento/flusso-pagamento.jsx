import React from "react";
import {TextInput, Text, View, StyleSheet} from "react-native"

const ButtonPagamento = () => {
    return (
        <View>
            <Text>Seleziona la targa dell'auto parcheggiata:</Text>ù
            <View style={styles.container}>
                <Text style={styles.text}>Inserisci una nuova targa:</Text>
                <TextInput style={styles.text} placeholder="AA000AA"/>
            </View>
        </View>
    )
}

export default ButtonPagamento

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    text: {
        color: "white"
    }
})  
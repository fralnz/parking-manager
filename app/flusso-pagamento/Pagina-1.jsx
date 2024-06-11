import React from "react";
import {TextInput, Text, View, StyleSheet} from "react-native"

const ButtonPagamento = () => {
    return (
        <View>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path
                    d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0"/>
            </svg>
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

export default ButtonPagamento

const styles = StyleSheet.create({
        container: {
            backgroundColor: 'black',
        },
        text: {

            color: "white"
        },
})
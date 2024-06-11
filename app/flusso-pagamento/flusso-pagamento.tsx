import React from "react";
import {TextInput, Text, View, StyleSheet, Button} from "react-native"
import {router} from "expo-router";

const defaultPage = () => {
    return (
        <View>
            <View style={styles.container}>
                <Button title={"Pagina 1"} onPress={() => router.push("/flusso-pagamento/Pagina-1" )}/>
                <Button title={"Pagina 2"} onPress={() => router.push("/flusso-pagamento/Pagina-2" )}/>
                <Button title={"Pagina 3"} onPress={() => router.push("/flusso-pagamento/Pagina-3" )}/>
                <Button title={"Pagina 4"} onPress={() => router.push("/flusso-pagamento/Pagina-4" )}/>
                <Button title={"Pagina 5"} onPress={() => router.push("/flusso-pagamento/Pagina-5" )}/>
            </View>
        </View>
    )
}

export default defaultPage

const styles = StyleSheet.create({
    container: {
        gap: 16
    },
    text: {
        color: "white"
    }
})
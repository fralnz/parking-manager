import React, {useEffect, useState} from "react";
import {TextInput, Text, StyleSheet, View, TouchableOpacity, Button, SafeAreaView, ImageBackground} from "react-native";
import {Dropdown} from "@/app/flusso-pagamento/Components/ListaTarghe";
import {router} from "expo-router";
import getTarga from "@/app/flusso-pagamento/Query/Query_TargheUtente";
// @ts-ignore
import backgroundImage from './assets/BG_car.jpg';
import Steps from "@/app/flusso-pagamento/Components/Steps";


const useTarghe = (id_utente) => {
    const [loading, setLoading] = useState(true);
    const [targhe, setTarghe] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await getTarga(id_utente)
            // @ts-ignore
            setTarghe(res)
        })();
    }, []);

    return {loading, targhe};
}

const FirstPage = () => {
    const handleSelect = (option: string) => {
    };
    const {loading, targhe} = useTarghe(1)

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={backgroundImage} resizeMode="cover" style={{width: '100%', height: '100%'}}>
                <Steps/>

                <View style={styles.section}>
                    <Text style={styles.label}>Seleziona la targa dell'auto parcheggiata: </Text>
                    <Dropdown options={targhe} onSelect={handleSelect}/>

                    <Text style={[styles.label]}>Inserisci una nuova targa: </Text>
                    <TextInput style={styles.textArea} placeholder="AA 000 AA"/>

                    <TouchableOpacity style={styles.nextButton}>
                        <Button title={"Prosegui"} onPress={() => router.push("/flusso-pagamento/Pagina-2")}/>

                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default FirstPage
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        paddingHorizontal: 20,
    },
    section: {
        marginVertical: 10,
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
        fontWeight: "bold",
    },
    textArea: {
        width: '30%',
        height: 50,
        borderColor: '#0000fc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#f0f0f0',
    },
    resultBox: {
        width: '30%',
        height: 50,
        borderColor: '#0000fa',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    resultText: {
        fontSize: 18,
        color: '#002aff',
        fontWeight: "bold",
    },
    linkText: {
        fontSize: 18,
        color: 'blue',
        marginBottom: 10,
    },
    nextButton: {
        paddingTop: 30,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    nextButtonText: {
        fontSize: 24,
        color: 'white',
    },
});
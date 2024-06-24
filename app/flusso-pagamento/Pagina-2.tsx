import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet, Button, ImageBackground
} from 'react-native';
import {router} from "expo-router";
// @ts-ignore
import backgroundImage from './assets/BG_car.jpg';
import Steps from "@/app/flusso-pagamento/Components/Steps";




const ButtonPagamento = ({tariffa = 10}) => {

    const [parkingTime, setParkingTime] = useState('');
    const [totalToPay, setTotalToPay] = useState(0);

    useEffect(() => {
        const time = parseInt(parkingTime);
        if (!isNaN(time)) {
            const total = (time / 60) * tariffa;
            // @ts-ignore
            setTotalToPay(total.toFixed(2));
        } else {
            setTotalToPay(0.00);
        }
    }, [parkingTime]);

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={backgroundImage} resizeMode="cover" style={{width: '100%', height: '100%'}}>
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                    <Steps onPress={() => router.push("/flusso-pagamento/Pagina-1")}/>
                    <View style={styles.section}>
                        <Text style={styles.label}>Impostare il tempo della sosta:</Text>
                        <TextInput
                            style={styles.textArea}
                            placeholder="How many minutes do you stay away?"
                            keyboardType="numeric"
                            multiline={false}
                            onChangeText={setParkingTime}
                            maxLength={5}
                            value={parkingTime}
                        />
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.label}>Totale da pagare :</Text>
                        <View style={styles.resultBox}>
                            <Text style={styles.resultText}>{totalToPay}€</Text>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <TouchableOpacity style={styles.nextButton}>
                            <Button title={"Vai al pagamento"} onPress={() => router.push("/flusso-pagamento/Pagina-3")}/>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

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

export default ButtonPagamento;

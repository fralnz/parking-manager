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


const VerificaPagamento = () => {

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={backgroundImage} resizeMode="cover" style={{width: '100%', height: '100%'}}>
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                    <View>
                        <Text style={styles.label}>Verifica il pagamento con la tua Banca</Text>
                    </View>
                    <View style={styles.section}>
                        <TouchableOpacity style={styles.nextButton}>
                            <Button title={"Torna all Home"}
                                    onPress={() => router.push("../../home")}/>
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
        textAlign: "center",
        padding: 15,
    },
    nextButton: {
        paddingTop: 30,
        width: 140,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        // borderCurve: 'circular',
    },
    nextButtonText: {
        fontSize: 24,
        color: 'white',
    },
});

export default VerificaPagamento;

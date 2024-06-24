import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
    const [useRegisteredCard, setUseRegisteredCard] = useState(true);
    const [cardType, setCardType] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [verificationCode, setVerificationCode] = useState('');

    const handleSubmit = () => {
        // Handle form submission
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.stepIndicator}>
                    <View style={[styles.step, styles.completed]}></View>
                    <View style={[styles.step, styles.completed]}></View>
                    <View style={[styles.step, styles.completed]}></View>
                    <View style={styles.step}></View>
                </View>
                <View style={styles.formGroup}>
                    <View style={styles.checkboxContainer}>
                        <Text style={styles.label}>Vuoi usare la carta registrata:</Text>
                    </View>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Carta di credito *</Text>
                    <TextInput
                        style={styles.input}
                        value={cardType}
                        onChangeText={setCardType}
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Nome del titolare *</Text>
                    <TextInput
                        style={styles.input}
                        value={cardholderName}
                        onChangeText={setCardholderName}
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Numero carta *</Text>
                    <TextInput
                        style={styles.input}
                        value={cardNumber}
                        onChangeText={setCardNumber}
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Data di scadenza *</Text>
                    <TextInput
                        style={styles.input}
                        value={expiryDate}
                        onChangeText={setExpiryDate}
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Codice di verifica *</Text>
                    <TextInput
                        style={styles.input}
                        value={verificationCode}
                        onChangeText={setVerificationCode}
                    />
                </View>
                <View style={styles.formGroup}>
                    <Button title="Vai avanti" onPress={handleSubmit} color="#007bff" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        width: 300,
    },
    stepIndicator: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    step: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#ccc',
    },
    completed: {
        backgroundColor: '#007bff',
    },
    formGroup: {
        marginBottom: 15,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        marginLeft: 8,
        marginBottom: 5,
        color: '#007bff',
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});

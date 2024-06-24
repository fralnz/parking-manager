// HomeScreen.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const SettingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title="Vai alle storico parcheggi 1"
                onPress={() => navigation.navigate('StoricoParcheggi')}
            />
            <Button
                title="Vai alla statistica parcheggi 2"
                onPress={() => navigation.navigate('StatisticaParcheggi')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30
    },
});

export default SettingScreen;

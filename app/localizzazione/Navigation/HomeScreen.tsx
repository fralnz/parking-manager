// HomeScreen.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title="Vai alle storico parcheggi 1"
                onPress={() => navigation.navigate('StoricoParcheggio')}
            />
            <Button
                title="Vai allo Screen 2"
                onPress={() => navigation.navigate('Screen2')}
            />
            <Button
                title="Vai allo Screen 3"
                onPress={() => navigation.navigate('Screen3')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;

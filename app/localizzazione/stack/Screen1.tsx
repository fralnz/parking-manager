// Screen1.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Screen1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            
            <Button
                title="Vai a Home"
                onPress={() => navigation.navigate('Home')}
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

export default Screen1;

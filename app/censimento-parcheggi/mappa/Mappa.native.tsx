import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function Mappa() {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} provider={PROVIDER_GOOGLE} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: "100%",
        height: "100%",
    },
});

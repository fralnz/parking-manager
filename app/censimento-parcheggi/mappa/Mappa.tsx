import React from "react";
import MapView from "@teovilla/react-native-web-maps";
import { StyleSheet, View } from "react-native";

const Mappa = () => {
    return (
        <View style={styles.container}>
            <MapView provider="google" googleMapsApiKey="AIzaSyA2mVmsvJOh447B9FKNRc6HPaGtn3Sbors" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: "100%",
        height: "100%",
    },
});

export default Mappa;

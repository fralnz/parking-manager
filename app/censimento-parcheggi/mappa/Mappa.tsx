import React from "react";
import MapView from "@teovilla/react-native-web-maps";
import {StyleSheet, View} from "react-native";

const Mappa = ({children}) => {
    return (
        <View style={styles.container}>
            <MapView
                provider="google"
                googleMapsApiKey={process.env.GOOGLEMAPS_APIKEY}
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                {children}
            </MapView>

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

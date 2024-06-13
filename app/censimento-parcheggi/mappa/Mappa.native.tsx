import React from "react";
import {StyleSheet, View} from "react-native";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

const Mappa = ({children}) => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 45.4642,
                    longitude: 9.1900,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {children}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
    ,
    map: {
        width: "100%",
        height:
            "100%",
    }
    ,
});

export default Mappa;

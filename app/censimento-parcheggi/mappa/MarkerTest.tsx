import React from "react";
import { Platform } from "react-native";

let Marker;

const MarkerTest = () => {
    if (Platform.OS === 'web') {
        return ( //marker su web (non funziona ancora)
            null
        );
    }
    return ( //marker su mobile
        <Marker
            coordinate={{
                latitude: 45.4692,
                longitude: 9.1900,
            }}
            title={"title"}
            description={"description"}
        />
    );
};

export default MarkerTest;

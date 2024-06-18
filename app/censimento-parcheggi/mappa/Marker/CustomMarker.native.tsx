import React from "react";
import {Marker} from "react-native-maps";

const CustomMarker = ({latitude, longitude, title, description}: {
    latitude: number,
    longitude: number,
    title?: string,
    description?: string
}) => {
    return (
        <Marker
            coordinate={{
                latitude: latitude,
                longitude: longitude,
            }}
            title={title}
            description={description}
        />
    );
};

export default CustomMarker;

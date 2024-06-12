import React, {useEffect, useState} from "react";
import {Text, FlatList, ActivityIndicator, StyleSheet} from "react-native";
import {View} from "react-native";
import MapView from 'react-native-maps';

const TestMap=()=>{
    return(
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
export default TestMap;
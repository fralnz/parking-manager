import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const Steps = (props: { onPress?: () => void }) => <View style={styles.steps}>
    <Text style={styles.stepComplete}
          onPress={props.onPress}>✔</Text>
    <Text style={styles.stepCurrent}>○</Text>
    <Text style={styles.stepIncomplete}>○</Text>
    <Text style={styles.stepIncomplete}>○</Text>
</View>;
const styles = StyleSheet.create({
    steps: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
        cursor: "pointer",
    },
    stepComplete: {
        color: 'blue',
        fontSize: 24,
    },
    stepCurrent: {
        color: 'blue',
        fontSize: 24,
    },
    stepIncomplete: {
        color: 'gray',
        fontSize: 24,
    },
})
export default Steps;
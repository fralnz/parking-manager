import React from "react";
import {TextInput, Text, View, Button} from "react-native";

const Test = () => {
    return (
        <View>
            <Text>Test</Text>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            />
            <Text></Text>
            <Button
                title="Press Me"
            />
        </View>
    );
}

export default Test;
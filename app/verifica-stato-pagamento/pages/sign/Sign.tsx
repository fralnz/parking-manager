import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Text,
  Pressable,
} from "react-native";

const Sign = () => {
  const [matricola, matricola_set] = useState(null);
  const [password, password_set] = useState(null);

  return (
    <>
      <View style={styles.container}>
        <Text>Matricola: {matricola}</Text>
        <TextInput style={styles.input} onChangeText={matricola_set} />
        <Text>Password</Text>
        <TextInput style={styles.input} onChangeText={password_set} />
        <Pressable style={styles.buttonLogin}>
          <Text style={styles.textLogin}>Login</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    margin: 12,
    borderWidth: 1,
  },
  container: {
    height: Dimensions.get("window").height,
  },
  buttonLogin: {
    backgroundColor: "#a42828",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  textLogin: {
    color: "white",
    textAlign: "center",
  },
});

export default Sign;

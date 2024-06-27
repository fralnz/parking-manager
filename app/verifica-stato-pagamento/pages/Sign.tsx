import React, { useState, useEffect} from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Text,
  Pressable,
} from "react-native";

import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yuyyujadubndgfpxauug.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1eXl1amFkdWJuZGdmcHhhdXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NjA4MzUsImV4cCI6MjAzMzIzNjgzNX0.V8bBPKuA3fXB10LcA1inEJRDAv96y-ePQaNdpaKO0yo'
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey)

const Sign = ({UpdateMatricola}) => {
  const [matricola, matricola_set] = useState(null);
  const [password, password_set] = useState(null);

  

  const tryLogin = async ()=>{
    let { data, error } = await supabase
        .from('forze_ordine')
        .select('id')
        .eq("matricola", matricola)
        .eq("password", password);
    if(data.length>0){
      UpdateMatricola(matricola);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Text>Matricola: {matricola}</Text>
        <TextInput style={styles.input} onChangeText={matricola_set} />
        <Text>Password</Text>
        <TextInput style={styles.input} onChangeText={password_set} />
        <Pressable style={styles.buttonLogin} onPress={tryLogin}>
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

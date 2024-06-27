import React, { useEffect, useState } from "react";
import {SafeAreaView, View, Text, StyleSheet, Dimensions} from "react-native";

import Sign from './pages/Sign';
import Segnalazioni from "./pages/segnalazioni";
import Header from "./components/header";

/* 
const supabaseUrl = "https://eucgcytepwjzmnlgpuqz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1Y2djeXRlcHdqem1ubGdwdXF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3MTg1MDgsImV4cCI6MjAzNDI5NDUwOH0.bdOvP5iYu_bVc2uSfAPPLItj2tb4rgjnupUi8Jflsws";
const supabase = createClient(supabaseUrl, supabaseKey); */

const VerificaPagamento = () => {

  const [matricola, matricola_set] = useState("");

  const UpdateMatricola = (matricola: string)=>{
    matricola_set(matricola);
  }

  return (
    <SafeAreaView style={styles.body}>
      {
        matricola? <Segnalazioni/> : <Sign UpdateMatricola={UpdateMatricola}/>
      }
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body:{
      height: Dimensions.get("window").height,
      
  }
});

export default VerificaPagamento;

import React, { useEffect, useState } from "react";
import {SafeAreaView, View, Text, StyleSheet, Dimensions} from "react-native";
import { createClient } from "@supabase/supabase-js";

import Sign from './pages/sign/Sign';

/* 
const supabaseUrl = "https://eucgcytepwjzmnlgpuqz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1Y2djeXRlcHdqem1ubGdwdXF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3MTg1MDgsImV4cCI6MjAzNDI5NDUwOH0.bdOvP5iYu_bVc2uSfAPPLItj2tb4rgjnupUi8Jflsws";
const supabase = createClient(supabaseUrl, supabaseKey); */

const VerificaPagamento = () => {

  const [matricola, matricola_set] = useState(null);

  const UpdateMatricola = (matricola: string)=>{
    
  }

  return (
    <SafeAreaView style={styles.body}>
      <Sign/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body:{
      height: Dimensions.get("window").height,
      
  }
});

export default VerificaPagamento;

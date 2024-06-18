import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button, Text, View } from "react-native";
import { router } from "expo-router";

const supabaseUrl = "https://yuyyujadubndgfpxauug.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1eXl1amFkdWJuZGdmcHhhdXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NjA4MzUsImV4cCI6MjAzMzIzNjgzNX0.V8bBPKuA3fXB10LcA1inEJRDAv96y - ePQaNdpaKO0yo";

export const supabase = createClient(supabaseUrl, supabaseKey);

async function useCountries() {
  const { data, error } = await supabase
    .from("films")
    .insert([{ nome: "provaProva" }])
    .select();
  console.error("Error", error);
  console.log("TCL: getCountries -> ", data);
}

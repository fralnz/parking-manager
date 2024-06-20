import React from "react";
import { useEffect, useState } from "react";
import BarBottomNavigation from "./Navigation/barra-navigazione";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router";

function App() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }}  />
      <NavigationContainer independent={true}>
        <BarBottomNavigation />
      </NavigationContainer>
    </>
  );
}
export default App;

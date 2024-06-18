import { useEffect, useState } from "react";
import BarBottomNavigation from "./Navigation/barra-navigazione"
import { NavigationContainer } from "@react-navigation/native";

function App() {
    return (
        <NavigationContainer independent = {true} >
            <BarBottomNavigation />
        </NavigationContainer >
    );
}
export default App;
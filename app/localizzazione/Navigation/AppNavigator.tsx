// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import Screen1 from "../stack/Screen1";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StoricoParcheggio } from "../storico-parcheggi";
import { StatisticaParcheggi } from "../statistica-parcheggi";
import SettingScreen from "./SettinScreen copy";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Profile") {
            iconName = "person";
          } else if (route.name === "Parking") {
            iconName = "local-parking";
          } else if (route.name === "Setting") {
            iconName = "menu";
          }

          // Cambia colore dell'icona se è attiva
          color = focused ? "blue" : "black";
          const size = 24;
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "white",
        },
      })}
    >
      <Tab.Screen name="Profile" component={StackNavigator} />
      <Tab.Screen name="Parking" component={Screen1} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen1} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="StoricoParcheggi"
        component={StoricoParcheggio}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="StatisticaParcheggi"
        component={StatisticaParcheggi}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;

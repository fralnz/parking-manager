import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons"; // Importa le icone
import { View, Text, Button } from "react-native";
import { router } from "expo-router";

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

function ParkingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Parking!</Text>
    </View>
  );
}

function SettingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title={"storico"} onPress={() => router.push("/localizzazione/storico-parcheggi")} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function BarBottomNavigation() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
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

            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "black",
          tabBarStyle: {
            backgroundColor: "white"
          },
        })}
      >
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Parking" component={ParkingScreen} />
        <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
  );
}

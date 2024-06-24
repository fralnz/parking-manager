import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Button } from "react-native";
import { StoricoParcheggio } from "../storico-parcheggi";

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

function SettingScreen({ navigation }) {
  console.log(navigation);
  const [showHistory, setShowHistory] = React.useState(false);

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  React.useEffect(() => {
    if (showHistory) {
      // Esegui azioni quando lo storico è mostrato
      console.log("Storico visualizzato");
    }
  }, [showHistory]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
<<<<<<< Updated upstream
      {showHistory ? (
        <StoricoParcheggio />
      ) : (
        <Button title={"Mostra Storico"} onPress={toggleHistory} />
      )}
=======
      <Button title={"storico"} onPress={() => router.push("/localizzazione/storico-parcheggi")} />
      <Button title={"statica"} onPress={() => router.push("/localizzazione/statistica-parcheggi")} />


>>>>>>> Stashed changes
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function BarBottomNavigation() {
  
  const headerLeft = () => {
    return (
      <MaterialIcons
        name="reply"
        size={24}
        color="black"
        style={{ marginLeft: 10 }}
        onPress={() => alert("Menu pressed")}
      />
    );
  };

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
          backgroundColor: "white",
        },
      })}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true, // Mostra l'intestazione per questa schermata
          headerLeft: headerLeft,
        }}
      />
      <Tab.Screen
        name="Parking"
        component={ParkingScreen}
        options={{
          headerShown: true, // Mostra l'intestazione per questa schermata
          headerLeft: headerLeft,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerShown: true, // Mostra l'intestazione per questa schermata
          headerLeft: headerLeft,
        }}
      />
    </Tab.Navigator>
  );
}

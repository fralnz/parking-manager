import React from "react";
import { router, Stack } from "expo-router"
import {TextInput, Text, View, Button} from "react-native";

export default function Test(){
    return(

        <>
          <Stack.Screen options={{
              title:"home",
              headerTitleAlign: "center",
          }} />

          <View
              style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
              }}
          >

              <View style={{gap:16 }}>
                <Button onPress={() => router.push("./segnali-da-utente")} title={'Segnalazioni Utente'}/>
                <Button title={"Notifiche Del Sistema"}/>
              </View>
          </View>
      </>
    
        
    )

}
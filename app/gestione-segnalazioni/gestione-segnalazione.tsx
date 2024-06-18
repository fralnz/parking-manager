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
                <Button onPress={() => router.push("./cronologia-notifiche")} title={"Notifiche Del Sistema"}/>
                <hr />
                <Button onPress={() => router.push("./invio-notifiche")} title={'Invio notifiche'}/>
              </View>
          </View>
      </>
    
        

    )

}
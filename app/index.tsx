import {Button, Text, View} from "react-native";
import {router, Stack} from "expo-router"; //questa è la pagina principale !
import React from "react";

export default function Index() {
  return (
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
                  <Button title={"Censimento Parcheggi"} onPress={() => router.push("/censimento-parcheggi/censimento-parcheggi" )}/>
                  <Button title={"Flusso Pagamento"} onPress={() => router.push("/flusso-pagamento/flusso-pagamento" )}/>
                  <Button title={"Gestione Segnalazioni"} onPress={() => router.push("/gestione-segnalazioni/gestione-segnalazione" )}/>
                  <Button title={"Localizzazione"} onPress={() => router.push("/localizzazione/localizzazione" )}/>
                  <Button title={"Statistica"} onPress={() => router.push("/statistica/statistica" )}/>
                  <Button title={"Verifica Pagamento"} onPress={() => router.push("/verifica-stato-pagamento/verifica-stato-pagamento" )}/>
              </View>
          </View>
      </>
  );
}

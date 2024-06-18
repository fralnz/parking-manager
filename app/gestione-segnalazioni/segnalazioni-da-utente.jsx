import { View, Text, Button, Pressable } from "react-native-web";
import { router } from "expo-router"

export default function MenuNotificaDaUtente(){
    return(
        <View>
        <Text>Che cosa vuoi segnalare?</Text>
        <Pressable onPress={console.log("Segnalazione fatta! Grazie per il contributo!")}>
            <Text>Parcheggio Ostruito</Text>
        </Pressable>
        
        <Text onPress="Inserire feedback:">Altro</Text>
        
        </View>
    )

}
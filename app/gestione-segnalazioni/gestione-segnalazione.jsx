import { router } from "expo-router"
import { Button , View} from "react-native-web"
export default function Test(){
    return(
        <View>

      
        <Button onPress={() => router.push("./segnalazioni-da-utente")} title={'SENDTO NEXT PAGE'}/>
        </View>
    )

}
import { View, Text, Button } from "react-native-web";

export default function MenuNotificaDaUtente(){
    return(
        <View>
        <Text>Che cosa vuoi segnalare?</Text>

        {/*
        Elenca lista di opzioni 
        */}
        
        <ul>
            <li onClick="Segnalazione inviata! Grazie per il contributo!">Esempio</li>
            <li onClick="Inserire feedback:">Altro</li>
        </ul>

        <Button onClick>
            Indietro
        </Button>

        </View>
    )

}
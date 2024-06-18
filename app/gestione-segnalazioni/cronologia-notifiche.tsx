import React from "react";
import { router } from "expo-router"
import {TextInput, Text, View, Button} from "react-native";

const Cronologia = () => {
    return(
        <>
        <View>
        <div>
            <h1>Introduzione a React</h1>
            <p>Iniziamo il corso</p>
            <button>Bottone</button>
            <Notifica title="Primo titolo" data="01-02-23" descrizione="ciao ciao ciao ciao"/>
            <Notifica />
            <Notifica />
        </div>
        </View>
        </>
    )
}

const Notifica = ({title = "Titolo di default", data = "Data di default", descrizione = "Descrizione di default"}) => {
    return(
        <>
        <View>
        <div className="notifica">
                <h3 className="data">{title}</h3>
            <div className="data">Data: {data}</div>
            <div className="descrizione">{descrizione}</div>
        </div>
        </View>
        </>
    )
}

export default Cronologia;
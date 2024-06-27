import React from "react";
import {Button} from "react-native"
import {router, Stack} from "expo-router";

const Header = ()=>{
    return(
        <>
            <header>
                <nav>
                    <ul>
                        <li><Button title={"Segnalazioni"} onPress={() => router.push("/verifica-stato-pagamento/pages/segnalazioni")}/></li>
                        <li><Button title={"Parcheggi"} onPress={() => router.push("/verifica-stato-pagamento/pages/parcheggi")}/></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;
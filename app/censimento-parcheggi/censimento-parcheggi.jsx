import React, { useEffect, useState } from "react";
import { Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, TextInput, View } from "react-native";
import { Stack } from "expo-router";
import Mappa from "./mappa/Mappa";

const API_SERVER_URL = "http://127.0.0.1:5000";

const useFilms = () => {
    const [loading, setLoading] = useState(true);
    const [failed, setFailed] = useState(false);
    const [films, setFilms] = useState([]);
    let reloadApi = false;

    useEffect(() => {
        (async () => {
            fetchFilms();
        })();
    }, [reloadApi]);
    const fetchFilms = async () => {
        try {
            const res = await fetch(API_SERVER_URL + "/get_films");
            const json = await res.json();
            setFilms(json);
            setLoading(false);
        } catch (error) {
            setFailed(true);
        }
    };
    const refetch = () => {
        fetchFilms();
    };
    return { loading, failed, films, refetch };
};

async function postTest(name, callback) {
    if (name) {
        try {
            const res = await fetch(API_SERVER_URL + "/add_film", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ film_name: name }),
            });
            const status = await res.json();
            callback(); // Aggiorna la lista dei film una volta aggiunto
        } catch (error) {}
    }
}

const CensimentoParcheggi = () => {
    const { loading, failed, films, refetch } = useFilms();
    const [uInput, setUInput] = useState("");

    const addFilm = () => {
        //Invia input all'api POST e aggiorna la lista dei film una volta ricevuta la risposta della POST
        postTest(uInput, refetch);
    };

    return (
        <>
            <Stack.Screen options={{ headerTitle: "Gestione Parcheggio" }} />
            <SafeAreaView style={style.test}>
                <Mappa />
                <View style={style.container}>
                    <View>
                        {!loading ? (
                            <FlatList
                                style={style.list}
                                contentContainerStyle={{ gap: 8 }}
                                data={films}
                                extraData={films}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={(film) => <Text>- {film?.item?.nome}</Text>}
                            />
                        ) : (
                            <ActivityIndicator size="large" />
                        )}
                    </View>
                    <View>
                        <TextInput
                            style={style.input}
                            placeholder="Inserire nome del film"
                            name="input"
                            onChange={(e) => {
                                setUInput(e.target.value);
                            }}
                        />
                        <Button type="submit" title="SUBMIT" onPress={addFilm} />
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};
const style = StyleSheet.create({
    list: { gap: 2, marginBottom: "1vw" },
    container: { flex: 0, alignItems: "center" },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    test: { height: "100%", width: "100%" },
});
export default CensimentoParcheggi;

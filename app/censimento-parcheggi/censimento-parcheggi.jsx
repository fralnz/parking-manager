import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, TextInput, View } from "react-native-web";

const API_SERVER_URL = "http://127.0.0.1:5000";

const useFilms = () => {
    const [loading, setLoading] = useState(true);
    const [failed, setFailed] = useState(false);
    const [films, setFilms] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(API_SERVER_URL + "/get_films");
                setFilms(await res.json());
                setLoading(false);
            } catch (error) {
                setFailed(true);
            }
        })();
    }, []);
    return { loading, failed, films };
};

async function postTest(name) {
    if (name) {
        try {
            const res = await fetch(API_SERVER_URL + "/add_film", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ film_name: name }),
            });
            const test = await res.json();
        } catch (error) {}
    }
}

const CensimentoParcheggi = () => {
    const { loading, failed, films } = useFilms();
    const [uInput, setUInput] = useState("");
    const addFilm = () => {
        postTest(uInput);
    };

    return (
        <>
            <Stack.Screen options={{ headerTitle: "Gestione Parcheggio" }} />
            <SafeAreaView>
                <View style={style.container}>
                    <View>
                        {!loading ? (
                            <FlatList
                                style={style.list}
                                contentContainerStyle={{ gap: 8 }}
                                data={films}
                                renderItem={(film) => <Text>- {film?.item?.nome}</Text>}
                            />
                        ) : (
                            <ActivityIndicator size="large" />
                        )}
                    </View>
                    <View>
                        <TextInput
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
});
export default CensimentoParcheggi;

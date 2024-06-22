import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Stack} from "expo-router";
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer'

function Pagina5({min}) {
    return (
        <>
            <Stack.Screen options={{
                title: "Timer",
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 32,
                    color: "white"
                },
                headerStyle: {
                    backgroundColor: "#435fd1"
                }
            }}/>
            <View style={style.main_container}>
                <Text style={style.heading}>
                    Scade fra
                </Text>
                <CountdownCircleTimer
                    isPlaying
                    duration={5}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[5, 4, 2, 0]}
                    size={420}
                    onComplete={() => {
                        return { shouldRepeat: false, }
                    }}
                >
                    {({remainingTime}) => {
                        const hours = Math.floor(remainingTime / 3600)
                        const minutes = Math.floor((remainingTime % 3600) / 60)
                        const seconds = remainingTime % 60
                        return (
                            <>
                            <Text style={{fontSize: 32, padding: 16}}>Remaining</Text>
                            <Text style={{fontSize: 42}}>{`${hours}:${minutes}:${seconds}`}</Text>
                            </>
                        )
                    }}
                </CountdownCircleTimer>
            </View>
        </>
    );
}

const style = StyleSheet.create({
    main_container: {
        alignItems: "center",
        padding: 16,
        // backgroundColor: "#c8d3ff"
    },
    heading: {
        fontFamily: "Tahoma",
        fontSize: 42
    }
})
export default Pagina5;

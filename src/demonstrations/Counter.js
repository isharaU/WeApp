import React, { useState , useEffect } from "react";
import { StyleSheet, Text, View , Button } from "react-native";

const Counter = () => {
    const [count,setCount] = useState(0)
    const [newCount, setMewCount] = useState(0)

    useEffect(() => {
        console.log("count changed")
        return () => {
            console.log("use effect cleanup")
        }
    }, [count])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`Count: ${count}`}</Text>
            <Text style={styles.title}>{`NewCOunt: ${newCount}`}</Text>
            <Button color = {"red"} title = {"Increase the count"}
            onPress ={() => {setCount(count + 1)}}
            />
            
            <Button color = {"green"} title = {"Decrese the count"}
            onPress ={() => setCount(count - 1)
            }
            />

            <Button color = {"red"} title = {"Increase the count"}
            onPress ={() => {setMewCount(newCount + 1)}}
            />
            
            <Button color = {"green"} title = {"Decrese the count"}
            onPress ={() => setMewCount(newCount - 1)
            }
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "orange",
    },
    title: {
        fontSize: 25,
        alignSelf: "center",
        margin: 25,
    },
})

export default Counter;
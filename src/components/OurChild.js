import React from "react";
import { View, StyleSheet, Text } from "react-native";

const OurChild = (props) => {
    const message = props.message;
    return (
        <View style = {{height: 200, width: 200, backgroundColor: "red"}}>
            <Text>{message}</Text>
        </View>
    )
}

export default OurChild;
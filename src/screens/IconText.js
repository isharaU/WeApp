import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {Feather} from '@expo/vector-icons';

const IconText = ({props}) => {
    const { iconName , iconColor , bodyText , bodyTextStyles}= props;
    return (
        <View style={styles.container}>
            <Feather name={iconName} size={50} color={iconColor} />
            <Text style={[styles.TextTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    TextTheme: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
}); 

export default IconText;
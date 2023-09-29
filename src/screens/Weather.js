import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import RowText from "./RowText";


const Weather = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Feather name="sun" size={80} color="black" />

      <RowText
        props={{
          containerStyle: styles.ViewOne,
          textStyleone: styles.count,
          textOne: "6",
          textStyletwo: styles.Feels,
          textTwo: "Feels like 5",
        }}
      />  

      <RowText
        props={{
          containerStyle: styles.ViewTwo,
          textStyleone: styles.HighLow,
          textOne: "High: 8",
          textStyletwo: styles.HighLow,
          textTwo: "LOW: 4",
        }}
      />
      
      <RowText
        props={{
          containerStyle: styles.ViewThree,
          textStyleone: styles.weather,
          textOne: "It's Sunny",
          textStyletwo: styles.solu,
          textTwo: "Perfect T-shirt weather",
        }}
      />

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 4 : 0,
  },

  ViewOne: {
    padding: 20,
    alignItems: "center",
  },

  count: {
    fontSize: 50,
    fontWeight: "bold",
  },

  Feels: {
    fontSize: 20,
    fontWeight: "bold",
  },

  ViewTwo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    padding: 10,
  },

  HighLow: {
    fontSize: 20,
    color: "yellow",
  },

  ViewThree: {
    alignItems: "center",
    paddingTop: 200,
    backgroundColor : "green",
  },

  weather: {
    fontSize: 40,
    fontWeight: "bold",
  },

  solu: {
    fontSize: 20,
    fontWeight: "bold",
  },



});

export default Weather;
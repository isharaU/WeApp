import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Upcomingweather from "./src/screens/Upcomingweather";
import Weather from "./src/screens/Weather";
import City from "./src/screens/City";

const App = () => {
  return (
    <View style={styles.container}>
      <Weather />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

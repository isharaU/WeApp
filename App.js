import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Upcomingweather from "./src/components/Upcomingweather";
import Weather from "./src/components/Weather";

const App = () => {
  return (
    <View style={styles.container}>
      <Upcomingweather />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

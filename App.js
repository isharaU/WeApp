import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Upcomingweather from "./src/components/Upcomingweather";
import Weather from "./src/components/Weather";
import OurChild from "./src/components/OurChild";

const App = () => {
  return (
    <View style={styles.container}>
      <OurChild message= {"Hello"}/>
      <OurChild message= {"Greetings"}/>
      <OurChild message= {"Goodbye"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

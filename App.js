import React, { useState } from "react";
import Tabs from "./src/screens/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { View , StyleSheet} from "react-native";

const App = () => {
  const [loading, setLoading] = useState(true);
  if (loading) {
    return (
      <View style={styles.loa}>
        <ActivityIndicator
          size="large"
          color="#e67e22 "
        />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "center",
  },
  loa: {
    flex: 1,
    backgroundColor: "#3498db",
    justifyContent: "center",
  }
 
});
export default App;

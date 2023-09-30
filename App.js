import React, { useState , useEffect } from "react";
import Tabs from "./src/screens/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { View , StyleSheet} from "react-native";
import * as Location from "expo-location"

const App = () => {

  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null); // for error

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync(); // for location
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({}); // for location
      setLocation(location);
      setLoading(false);
    })();
  }, []);

  if (location) {
    console.log(location)
  }

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

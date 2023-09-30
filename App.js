import React, { useState , useEffect } from "react";
import Tabs from "./src/screens/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { View , StyleSheet} from "react-native";
import * as Location from "expo-location"
import { WEATHER_API_KEY } from "@env";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync();
      setLocation(location);
      setLoading(false);

      try {
        const weatherData = await fetchWeatherData(location.coords.latitude, location.coords.longitude);
        console.log("Weather data:", weatherData);
        
      } catch (error) {
        setErrorMsg("error");
      }
    })();
  }, []);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const apiKey = WEATHER_API_KEY; 
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
      
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  };

  if (loading) {
    return (
      <View style={styles.loa}>
        <ActivityIndicator
          size="large"
          color="#e67e22"
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


const fetchWeatherData = async (latitude, longitude) => {
  try {
    const apiKey = WEATHER_API_KEY; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid={API key}`;
    
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
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
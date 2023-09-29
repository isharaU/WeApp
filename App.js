import React from "react";
import Upcomingweather from "./src/screens/Upcomingweather";
import Weather from "./src/screens/Weather";
import City from "./src/screens/City";
import Tabs from "./src/screens/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
};

export default App;

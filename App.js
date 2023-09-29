import React from "react";
import Upcomingweather from "./src/screens/Upcomingweather";
import Weather from "./src/screens/Weather";
import City from "./src/screens/City";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'gray',
      }}>

        <Tab.Screen name="Current" component={Weather} options={{
          tabBarIcon: ({ focused }) => (
          <Feather 
          name="droplet" 
          size={24} 
          color={focused ? '#e91e63' : 'gray'} />)
        }}
        />

        <Tab.Screen name="Upcoming" component={Upcomingweather} options={{
          tabBarIcon: ({ focused }) => (
          <Feather 
          name="clock" 
          size={24} 
          color={focused ? '#e91e63' : 'gray'} />)
        }}
        
        />
        <Tab.Screen name="City" component={City} options={{
          tabBarIcon: ({ focused }) => (
          <Feather 
          name="home" 
          size={24} 
          color={focused ? '#e91e63' : 'gray'} />)
        }}
        />
      </Tab.Navigator>

    </NavigationContainer>
  );
};

export default App;

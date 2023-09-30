import React from "react";
import Upcomingweather from "./Upcomingweather";
import Weather from "./Weather";
import City from "./City";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (

    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
            backgroundColor: 'lightblue' ,
        } ,
        headerStyle: {
            backgroundColor: 'lightblue' ,
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
            color: '#e91e63',
        },
        
        }}>

        <Tab.Screen name="වර්ථමාන " component={Weather} options={{
            tabBarIcon: ({ focused }) => (
            <Feather 
            name="droplet" 
            size={24} 
            color={focused ? '#e91e63' : 'gray'} />)
        }}
        />

        <Tab.Screen name="ඉදිරියට " component={Upcomingweather} options={{
            tabBarIcon: ({ focused }) => (
            <Feather 
            name="clock" 
            size={24} 
            color={focused ? '#e91e63' : 'gray'} />)
        }}
        
        />
        <Tab.Screen name="නගරය " component={City} options={{
            tabBarIcon: ({ focused }) => (
            <Feather 
            name="home" 
            size={24} 
            color={focused ? '#e91e63' : 'gray'} />)
        }}
        />
    </Tab.Navigator>
    )
}

export default Tabs
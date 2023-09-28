import React from 'react';
import { View, Text,SafeAreaView,StyleSheet,Image } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const Weather = () => {
  return (
    <SafeAreaView style = {styles.wrapper}>
      <View style = {styles.container}>

        <Feather name="sun" size={100} color="black" />
        
        <Text style = {styles.temp}>6</Text>
        <Text style = {styles.feels}>Feels like 5</Text>
      
        <View style ={styles.highlowwrapper}>
          <Text style = {styles.highlow}>High: 8</Text>
          <Text style = {styles.highlow}>Low: 6</Text>
        </View>

        <View style = {styles.bodyWrapper}>
          <Text style = {styles.description}>It's sunny</Text>
          <Text style = {styles.messages}>Its perfect t-shirt Weather</Text>
        </View>

      </View>
    </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  } ,
  wrapper: {
    flex: 0.9,
    backgroundColor: 'red',
    
  } ,

  temp: {
    fontSize: 48,
    color: 'black'
  } ,

  feels: {
    fontSize : 30,
    color: 'black'
  } ,

  highlow: {
    color: 'black',
    fontSize : 20
  } ,

  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  } ,

  description: {
    fontSize: 48,
  } ,

  messages: {
    fontSize: 30,
  } ,


})
export default Weather;

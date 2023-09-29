import React from 'react';
import { SafeAreaView } from 'react-native';
import { View, FlatList, Text, StyleSheet , ImageBackground } from 'react-native';
import ListItems from './ListItems';

const data = [
  { id: '1', text: 'item 1' },
  { id: '2', text: 'item 2' },
  { id: '3', text: 'item 3' },
  { id: '4', text: 'item 4' },
  { id: '5', text: 'item 5' },
];

const Upcomingweather = () => {
  return (
    <SafeAreaView style={styles.container}>    

        <ImageBackground
            source = {require("./cloudy.jpg")}
            style = {styles.image}>

            <Text style={styles.head}>Upcoming Weather!</Text>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <ListItems text={item.text} />
                )}    
            />

        </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  head: {
    paddingBottom: 20,
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold',
    },

  image: {
    paddingTop: 5,
    paddingLeft: 20,
    width: 350,
    height: 800,
    flex: 0.3,
  },
  
});

export default Upcomingweather;

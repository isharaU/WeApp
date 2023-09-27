import React from 'react';
import { SafeAreaView } from 'react-native';
import { View, FlatList, Text, StyleSheet , ImageBackground } from 'react-native';

const data = [
  { id: '1', text: 'Item 1' },
  { id: '2', text: 'Item 2' },
  { id: '3', text: 'Item 3' },
  { id: '4', text: 'Item 4' },
  { id: '5', text: 'Item 5' },
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
                <View style={styles.item}>
                    <Text>{item.text}</Text>
                </View>
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

  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 0.1,
  },

  head: {
    paddingBottom: 20,
    },

  image: {
    paddingTop: 50,
    paddingLeft: 20,
    width: 350,
    height: 800,
    flex: 0.3,
  },
  
});

export default Upcomingweather;

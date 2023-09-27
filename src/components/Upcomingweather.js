import React from 'react';
import { SafeAreaView } from 'react-native';
import { View, FlatList, Text, StyleSheet , Image } from 'react-native';

const data = [
  { id: '1', text: 'Item 1' },
  { id: '2', text: 'Item 2' },
  { id: '3', text: 'Item 3' },
  { id: '4', text: 'Item 4' },
  { id: '5', text: 'Item 5' },
];

const MyListComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Upcoming Weather!</Text>    
        <Image
            source = {require("./cloudy.jpg")}
            style = {styles.image}
        />
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <View style={styles.item}>
                <Text>{item.text}</Text>
            </View>
            )}
        />
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  image: {
    width: 200,
    height: 200,
  },
});

export default MyListComponent;

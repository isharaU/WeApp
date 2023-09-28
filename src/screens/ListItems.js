import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListItem = ({ text }) => {
  return (
    <View style={styles.item}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 0.1,
  },
});

export default ListItem;

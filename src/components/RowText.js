import React from "react";
import { View, StyleSheet, Text } from "react-native";

const RowText = ({props}) => {
  const {
    containerStyle,
    textStyleone,
    textOne,
    textStyletwo,
    textTwo,
  } = props;
  
  return (
    <View style={containerStyle}>
      <Text style={textStyleone}>{textOne}</Text>
      <Text style={textStyletwo}>{textTwo}</Text>
    </View>
  );

}

const styles = StyleSheet.create({

});

export default RowText;
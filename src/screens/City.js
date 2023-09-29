import React from "react";
import { View, Text, StyleSheet ,SafeAreaView} from "react-native";
import { ImageBackground , StatusBar } from "react-native";
import { AntDesign , Feather } from '@expo/vector-icons';
import {iconText} from '../components/IconText';

const City = () => {
    return (
        <SafeAreaView style={styles.container}>
    
            <ImageBackground source={require("./City.jpg")}
            style = {styles.imageLayout}
            />

            <Text style={[styles.cityname, styles.cityText]}>London</Text>
            <Text style={[styles.country, styles.cityText]}>UK</Text>
            
            <View style={styles.populationwrapper}> 
                <AntDesign name="user" size={50} color="red" />
                <Text style={styles.populationtext}>8000</Text>
            </View>

            <View style={styles.risesetwrapper}>

                <Feather name="sunrise" size={50} color="purple" />
                <Text style={styles.risesetText}>10:46:58am</Text>

                <Feather name="sunset" size={50} color="yellow" />
                <Text style={styles.risesetText}>17:28:15pm</Text>
                
            </View>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
   
    } ,
    imageLayout: {
        width: 350,
        height: 800,
        flex: 1,
    },

    cityname: {
        fontSize: 40,
        
    },

    country: {
        fontSize: 30,
        
    },

    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
    },

    populationwrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },

    populationtext: {
        fontSize: 25,
        marginLeft: 7.5,
        fontWeight: 'bold',
        color: 'red',
    },

    risesetwrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
    },

    risesetText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'orange',
        flexDirection: 'column',
    },
});

export default City;
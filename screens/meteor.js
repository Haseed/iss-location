import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Meteor extends React.Component{
render(){
return(
    <View style={styles.container}>
        <Text>
    Meteor Screen
        </Text>
    </View>
);
}

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#EEE",
        alignItems:"center",
        justifyContent:"center",
        
    }
})
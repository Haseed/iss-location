import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image, Alert } from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import axios from "axios";


export default class IssLocation extends React.Component{
    constructor(){
        super()
        this.state={
            location:{}
        }
    }
    componentDidMount(){
        this.getIssLocation()
    }
    getIssLocation=()=>{
     axios
     .get("https://api.wheretheiss.at/v1/satellites/25544")
     .then((response)=>{
         this.setState({
             location:response.data
         })
     })
     .catch((error)=>{
        Alert("The error is : " + error.message)
     })   
    }
render(){
return(
    <View style={styles.container}>
        <ImageBackground  style={styles.locationBg} 
            source={require("../assets/iss_bg.jpg")}
        >
            <View>
           <MapView  
            region={{
                latitude: 3.7719500557997,
                longitude: -179.59546649688,
                latitudeDelta:100 ,
                longitudeDelta:100 ,
              }}
              >
                  <Marker coordinate={{
                      latitude:3.7719500557997,
                      longitude:-179.59546649688,

                  }}>

                  <Image  
                  source={require("../assets/iss_icon.png")}
                  style={styles.markerImg}
                  />        
                  </Marker>
               
            </MapView>      

            </View>
        </ImageBackground>
       
    </View>
);
}

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        
        
    },
    locationBg:{
        flex:1,
        resizeMode:"cover",
        
    },
    markerImg:{
        width:50,
        height:50,
    }
})
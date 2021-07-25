import React from 'react';
import { StyleSheet, Text, View,ImageBackground, TouchableOpacity,Image } from 'react-native';

export default class Home extends React.Component{
render(){
return(
    <View style={styles.container}>
        <ImageBackground source={require("../assets/bg_image.png")} 
        style={styles.imageBackground}
        >
            <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
                ISS Tracker App
            </Text>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.cardContainer}  
                
                > 
                    <TouchableOpacity  onPress={()=>{this.props.navigation.navigate("IssLocation")}}>
                    <Text style={styles.cardTitle}>
                     ISS Location   
                    </Text>   
                    <Text style={styles.Knowmore}>
                        Know More
                    </Text> 
                <Image   
                style={styles.cardImage}
                source={require("../assets/iss_icon.png")}
                />

                
                    </TouchableOpacity>
                </View>
                
                <View style={styles.cardContainer}>
                    <TouchableOpacity  onPress={()=>{this.props.navigation.navigate("Meteor")}}>
                    <Text style={styles.cardTitle}>
                     Meteors   
                    </Text>  
                    <Text style={styles.Knowmore}>
                        Know More
                    </Text>   
                    <Image   
                style={styles.cardImage}
                source={require("../assets/meteor_icon.png")}
                />
                    </TouchableOpacity>
                </View>

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
    imageBackground:{
        flex:1,
        resizeMode:"cover",
    },
    titleContainer:{
        flex:0.2, 
        alignItems:"center",
        justifyContent:"center",
    },
    titleText:{
        color:"white",
        fontSize:40,
        fontWeight:"bold",
       
    },
    mainContainer:{
        flex:0.6,
        justifyContent:"center",
        alignItems:"center",
    },
    cardContainer:{
        flex:0.35,
        backgroundColor:"white",
        margin:50,
        marginBottom:20,
        borderRadius:30,
        padding:30,
        width:"80%"
    },
    cardTitle:{
        fontSize:40,
        fontWeight:"bold",
        color:"black",
        marginTop:10,

    },
    Knowmore:{
        color:"red",
        fontSize:15,
        
    },
    cardImage:{
        position:"absolute",
        height:200,
        width:200,
        resizeMode:"contain",
        right:20,
        top:-110,
        zIndex:1,
    }
})
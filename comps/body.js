/*
* File: body.js
* Author: tóth júlia
* Copyright: 2023, tóth julia
* Group: Szoft 2/n
* Date: 2023-03-06
* Github: https://github.com/haribomaci/
* Licenc: GNU GPL
*/



import React from "react";
import { Button } from "react-native";
import {StyleSheet, Text, View } from "react-native-web";
import { TextInput } from 'react-native-web';

export default function Body(){
    const [aedge, setAedge] = React.useState('');
    const [bedge, setBedge] = React.useState('');
    const [cedge, setCedge] = React.useState('');
    const [volume, setVolume] = React.useState('');
    function onClacButton (){
        let volume = aedge *bedge*cedge
        setVolume(volume);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Élek bekérése
            </Text>
            <Text>
                a oldal: 
            </Text>
            <TextInput onChangeText={(res) => {setAedge(res)}} style={styles.input}/>
            <Text>
                b oldal: 
            </Text>
            <TextInput onChangeText={(res) => {setBedge(res)}} style={styles.input}/>
            <Text>
                c oldal: 
            </Text>
            <TextInput onChangeText={(res) => {setCedge(res)}} style={styles.input} />
            <Button title="Számít" onPress={onClacButton} >

            </Button>
            <Text>
               volume: 
            </Text>
            <TextInput onChangeText={(res) => {setVolume(res)}} style={styles.input} value={volume}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'gold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        
    },
    input:{
        backgroundColor:'white',
        widht: '80%',
        height: 30,
        marginBottom: 6,
    }
  });
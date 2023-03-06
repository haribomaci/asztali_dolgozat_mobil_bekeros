/*
* File: header.js
* Author: tóth júlia
* Copyright: 2023, tóth julia
* Group: Szoft 2/n
* Date: 2023-03-06
* Github: https://github.com/haribomaci/
* Licenc: GNU GPL
*/


import {StyleSheet, Text, View } from "react-native-web";

export default function Header(){
    return(
        <View style={styles.container}>
            <Text>
                Feladat 0358
            </Text>
            <Text>
                Paralelepipedon térfogata
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'gold',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });
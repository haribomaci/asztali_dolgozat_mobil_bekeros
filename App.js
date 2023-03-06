/*
* File: App.js
* Author: tóth júlia
* Copyright: 2023, tóth julia
* Group: Szoft 2/n
* Date: 2023-03-06
* Github: https://github.com/haribomaci/
* Licenc: GNU GPL
*/


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Body from './comps/body';
import Footer from './comps/footer';
import Header from './comps/header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/> {/*  komponens importálása */}
      <Body/> 
      <Footer/> 
      
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

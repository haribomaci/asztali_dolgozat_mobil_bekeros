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

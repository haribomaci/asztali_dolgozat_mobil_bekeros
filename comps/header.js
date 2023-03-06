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
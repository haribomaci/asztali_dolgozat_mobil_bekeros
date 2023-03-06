import {StyleSheet, Text, View } from "react-native-web";

export default function Footer(){
    return(
        <View style={styles.container}>
            <Text>
                Rólam
            </Text>
            <Text>
                Tóth Júlia, szoft 2/n, 2023-03-06
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
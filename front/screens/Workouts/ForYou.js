import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'

const ForYou = ({ navigation }) => {
    return (
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => { navigation.navigate('levelNav', { screen: 'LEVEL1'}) }} style={styles.button}>
            <Text>level1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.navigate('levelNav', { screen: 'LEVEL2'}) }} style={styles.button}>
            <Text>level2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.navigate('levelNav', { screen: 'LEVEL3'}) }} style={styles.button}>
            <Text>level3</Text>
          </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    button: {
      width: 200,
      height: 100,
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
    },
    buttonContainer: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: 50,
      color: 'white'
    }
  });

export default ForYou;
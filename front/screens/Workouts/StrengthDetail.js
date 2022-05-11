import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const StrengthDetail = ({ route }) => {
    const {exerciseName} = route.params;
    return (
        <View style={styles.Container}>
            <View>
                <Text>{exerciseName}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   Container:{
        flex:1,
        justifyContent:"center",
        alignItems: "center",      
    }
})

export default StrengthDetail;
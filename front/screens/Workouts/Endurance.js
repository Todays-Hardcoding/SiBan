import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Endurance = () => {
    return (
        <View style={styles.Container}>
            <Text>지구력운동</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})

export default Endurance;
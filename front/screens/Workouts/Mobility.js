import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Mobility = () => {
    return (
        <View style={styles.Container}>
            <Text>활동성운동</Text>
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

export default Mobility;
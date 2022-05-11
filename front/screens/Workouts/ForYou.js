import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const ForYou = ({ navigation }) => {
    return (
        <View style={styles.centerView}>
            <Text> 추천 코스 화면 입니다.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    centerView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})

export default ForYou;
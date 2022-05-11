import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Accomplished() {
  return (
    <View style={styles.centerView}>
      <Text> 달성 기록 화면 입니다.</Text>
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

export default Accomplished;
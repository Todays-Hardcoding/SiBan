import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Record() {
  return (
    <View style={styles.centerView}>
      <Text> 기록 화면 입니다.</Text>
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

export default Record;
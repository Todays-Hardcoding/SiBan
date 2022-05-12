import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CounterInput from "react-native-counter-input";




function RoutineRecord() {
  return (
    <View style={styles.centerView}>
      <Text> 루틴 기록 화면 입니다.</Text>
      <CounterInput style={styles.counter}
        onChange={(counter) => {
          console.log("onChange Counter:", counter);
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  counter:{
    
  }
})

export default RoutineRecord;
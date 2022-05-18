import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const RoutineRecord = ({ navigation, route }) => {
  const [routineCount, setRoutineCount] = useState(0);
  const sendData = () => {
    navigation.navigate("ActivityNav", {
      screen: "ACCOMPLISHED",
      params: { routineCount: routineCount },
    });
  }

  return (
    <View style={styles.centerView}>
      <View>
        <TouchableOpacity style={styles.counter} onPress={() => { setRoutineCount(routineCount + 1); }}>
          <Text style={styles.RoutineRecordText}>증가</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.RoutineRecordText}>루틴: {routineCount}</Text>
        </View>

        <TouchableOpacity style={styles.counter} onPress={() => setRoutineCount(routineCount - 1)}>
          <Text style={styles.RoutineRecordText}>감소</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.counter} onPress={() => sendData()}>
          <Text style={styles.RoutineRecordText}>달성기록 확인</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerView: {
    justifyContent: "center",
    alignItems: "center",
  },
  counter: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: "black",
  },
  RoutineRecordText: {
    fontSize: 50,
  },
});

export default RoutineRecord;

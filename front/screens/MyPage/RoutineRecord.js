import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const RoutineRecord = () => {
  const [routine, setRoutine] = useState(0);
  const sendData = (item) => {
  navigation.navigate("ActivityNav", {
    screen: item.routine,
    params: routineCount,
  });
}

  return (
    <View style={styles.centerView}>
      <View>
        <TouchableOpacity style={styles.counter} onPress={() => setRoutine(routine + 1)}>
          <Text style={styles.RoutineRecordText}>증가</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.RoutineRecordText}>루틴: {routine}</Text>
        </View>

        <TouchableOpacity style={styles.counter} onPress={() => setRoutine(routine - 1)}>
          <Text style={styles.RoutineRecordText}>감소</Text>
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

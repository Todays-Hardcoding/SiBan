import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const RoutineRecord = ({ navigation, route }) => {
  const [routineCount, setRoutineCount] = useState(0);
  const [routineRecordImg, setroutineRecordImg] = useState();
  const [responseImg, setresponseImg] = useState();
  const sendData = () => {
    navigation.navigate("ActivityNav", {
      screen: "ACCOMPLISHED",
      params: { routineCount: routineCount },
    });
  };

  const parseRoutineCount = [
    {
      code: "#f1c40f",
      src: require("../../assets/trophy/trophy0.png"),
    },
    {
      code: "#c0392b",
      src: require("../../assets/trophy/trophy1.png"),
    },
    {
      code: "#2ecc71",
      src: require("../../assets/trophy/trophy2.png"),
    },
    {
      code: "#3498db",
      src: require("../../assets/trophy/trophy3.png"),
    },
    {
      code: "#9b59b6",
      src: require("../../assets/trophy/trophy4.png"),
    },
    {
      code: "#34495e",
      src: require("../../assets/trophy/trophy5.png"),
    },
    {
      code: "#16a085",
      src: require("../../assets/trophy/trophy6.png"),
    },
    {
      code: "#27ae60",
      src: require("../../assets/trophy/trophy7.png"),
    },
    {
      code: "#2980b9",
      src: require("../../assets/trophy/trophy8.png"),
    },
    {
      code: "#8e44ad",
      src: require("../../assets/trophy/trophy9.png"),
    },
    {
      code: "#2c3e50",
      src: require("../../assets/trophy/trophy10.png"),
    },
    {
      code: "#f1c40f",
      src: require("../../assets/trophy/trophy11.png"),
    },
    {
      code: "#e67e22",
      src: require("../../assets/trophy/trophy12.png"),
    },
    {
      code: "#e74c3c",
      src: require("../../assets/trophy/trophy13.png"),
    },
    {
      code: "#ecf0f1",
      src: require("../../assets/trophy/trophy14.png"),
    },
    {
      code: "#95a5a6",
      src: require("../../assets/trophy/trophy15.png"),
    },
    {
      code: "#f39c12",
      src: require("../../assets/trophy/trophy16.png"),
    },
    {
      code: "#d35400",
      src: require("../../assets/trophy/trophy17.png"),
    },
    {
      code: "#c0392b",
      src: require("../../assets/trophy/trophy18.png"),
    },
    {
      code: "#bdc3c7",
      src: require("../../assets/trophy/trophy19.png"),
    },
    {
      code: "#7f8c8d",
      src: require("../../assets/trophy/trophy20.png"),
    },
  ];

  return (
    <View style={styles.centerView}>
      <View style={styles.itembox}>
        <Image
          style={styles.itemCode}
          source={parseRoutineCount[routineCount].src}
          backgroundColor={parseRoutineCount[routineCount].code}
        />
        <TouchableOpacity
          style={styles.counter}
          onPress={() => {
            setRoutineCount(routineCount + 1);
            if (routineCount > 19) {
              setRoutineCount(0);
            }
          }}
        >
          <Text style={styles.RoutineRecordText}>증가</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.RoutineRecordText}>루틴: {routineCount}</Text>
        </View>
        {/* 
        <TouchableOpacity
          style={styles.counter}
          onPress={() => setRoutineCount(routineCount - 1)}
        >
          <Text style={styles.RoutineRecordText}>감소</Text>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.counter} onPress={() => sendData()}>
          <Text style={styles.RoutineRecordText}>달성기록 확인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#191919",
  },
  counter: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#5c5c5c",
  },
  RoutineRecordText: {
    fontSize: 50,
    color: "#ececec",
  },
  itembox: {
    alignItems: "center",
  },
  itemCode: {
    resizeMode: "contain",
    width: 350,
    height: 350,
  },
});

export default RoutineRecord;

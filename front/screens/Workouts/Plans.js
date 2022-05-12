import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";

const Plans = ({ navigation }) => {
  const [text, setText] = useState("");
  const [myPlan, setMyPlan] = useState({});
  const addPlan = () => {
    try {
      if (text === "") {
        return;
      }
      const newMyPlan = {
        ...myPlan,
        [Date.now()]: { text },
      };
      setMyPlan(newMyPlan);
      setText("");
    } catch (e) {}
  };
  const deletePlan = (key) => {
    Alert.alert("삭제하시겠습니까?", "정말로?", [
      {
        text: "취소",
      },
      {
        text: "확인",
        onPress: () => {
          const newMyPlan = { ...myPlan };
          delete newMyPlan[key];
          setMyPlan(newMyPlan);
        },
      },
    ]);
    return;
  };

  return (
    <View style={styles.Container}>
      <TextInput
        onSubmitEditing={addPlan}
        onChangeText={setText}
        value={text}
        placeholder={"플랜을 추가해주세요"}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.plus}
        onPress={() => navigation.navigate("Browse")}
      >
        <Text>
          <Fontisto name="plus-a" size={30} color="grey" />
        </Text>
      </TouchableOpacity>
      <ScrollView>
        {Object.keys(myPlan).map((key) => (
          <View style={styles.myPlan} key={key}>
            <Text style={styles.myPlanText}>{myPlan[key].text}</Text>
            <TouchableOpacity onPress={() => deletePlan(key)}>
              <Text>
                <Fontisto name="trash" size={18} color="#3A3D40" />
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 20,
    marginHorizontal: 20,
    fontSize: 18,
  },
  plus: {
    backgroundColor: "lightgrey",
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: "center",
  },
  myPlan: {
    backgroundColor: "#5C5C60",
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  myPlanText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
});

export default Plans;

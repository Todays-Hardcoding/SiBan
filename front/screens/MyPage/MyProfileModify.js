import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Table, Row, Rows } from "react-native-table-component-2";
import RNPickerSelect from "react-native-picker-select";

const MyProfileModify = () => {
  const [age, setAge] = useState("15");
  const [gender, setGender] = useState("여");
  const [height, setHeight] = useState("165");
  const [weight, setweight] = useState("60");

  return (
    <View style={styles.container}>
      <View style={styles.eachBox}>
        <Text style={styles.text}>나이</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(age) => setAge(age)}
          value={age}
        />
      </View>

      <View style={styles.eachBox}>
        <Text style={styles.text}>성별</Text>
        <RNPickerSelect
          onValueChange={(value) => setGender(value)}
          items={[
            { label: "남", value: "남", key: "0" },
            { label: "여", value: "여", key: "1" },
          ]}
          value={gender}
        />
      </View>

      <View style={styles.eachBox}>
        <Text style={styles.text}>키</Text>
        <TextInput
          style={styles.input}
          value={height}
          keyboardType="numeric"
          onChangeText={(height) => setHeight(height)}
        />
      </View>

      <View style={styles.eachBox}>
        <Text style={styles.text}>몸무게</Text>
        <TextInput
          style={styles.input}
          value={weight}
          keyboardType="numeric"
          onChangeText={(weight) => setweight(weight)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  eachBox: {
    flex: 1,
  },
  profile: {
    flex: 8,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  head: {
    height: 40,
    backgroundColor: "#F5EEDC",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    height: 40,
    marginLeft: 12,
    paddingLeft: 10,
    paddingTop: 10,
  },
});

export default MyProfileModify;

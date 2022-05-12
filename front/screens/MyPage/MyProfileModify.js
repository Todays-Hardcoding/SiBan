import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, TextInput } from "react-native";
import { Table, Row, Rows } from "react-native-table-component-2";
import RNPickerSelect from "react-native-picker-select";

const MyProfile = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setweight] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>나이</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(age) => setAge(age)}
        value={age}
      />
      <Text style={styles.text}>성별</Text>
      <RNPickerSelect
        onValueChange={(value) => setGender(value)}
        items={[
          { label: "남", value: "남", key: "0" },
          { label: "여", value: "여", key: "1" },
        ]}
        value={gender}
      />
      <Text style={styles.text}>키</Text>
      <TextInput
        style={styles.input}
        value={height}
        keyboardType="numeric"
        onChangeText={(height) => setHeight(height)}
      />
      <Text style={styles.text}>몸무게</Text>
      <TextInput
        style={styles.input}
        value={weight}
        keyboardType="numeric"
        onChangeText={(weight) => setweight(weight)}
      />

      <Text>age:{age}</Text>
      <Text>gender:{gender}</Text>
      <Text>height:{height}</Text>
      <Text>weight:{weight}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default MyProfile;

import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component-2";

const MyProfile = () => {
  // state = {age:"", gender:"",height:"",weight:""}
  // const [value, setValue] = useState('김이나');
  var state = {
    tableHead: ["회원이름"],
    tableData: [
      ["나이", "22"],
      ["성별", "남"],
      ["키", "175"],
      ["몸무게", "70"],
    ],
  };
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Table borderStyle={{ borderWidth: 2, borderColor: "black" }}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
      </View>
    </View>
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
  text: {
    margin: 6,
    textAlign: "center",
  },
});

export default MyProfile;

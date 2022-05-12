import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

const Record = () => {
  const [markedDates, setMarkedDates] = React.useState(null);
  const [dates, setDates] = React.useState(["2021-01-05", "2021-01-20"]);
  function addDates() {
    let obj = dates.reduce(
      (c, v) =>
        Object.assign(c, {
          [v]: { marked: true, dotColor: "red" },
        }),
      {}
    );
    console.log(obj);
    setMarkedDates(obj);
  }
  return (
    <View>
      <Calendar
        onDayPress={(day) => {
          addDates();
        }}
        markedDates={markedDates}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Record;

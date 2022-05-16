import React, { useState, useCallback, useRef } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Calendar } from "react-native-calendars";

import TodoInsert from "./TodoList/TodoInsert";
import TodoList from "./TodoList/TodoList";

const Record = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Math.random().toString(), textValue: text, checked: false },
    ]);
  };

  const onRemove = (id) => (e) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => (e) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

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
    <ScrollView style={styles.container}>
      <Calendar
        onDayPress={(day) => {
          addDates();
          <TodoList todos={todos} />;
        }}
        markedDates={markedDates}
      />
      <SafeAreaView>
        <View style={styles.card}>
          <TodoInsert onAddTodo={addTodo} />
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3143e8",
  },
  card: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,

    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },
});

export default Record;

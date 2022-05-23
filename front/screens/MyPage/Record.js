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
  const [dates, setDates] = React.useState("");
  const [shouldShow, setShouldShow] = useState(false);
  function addDates(day) {
    setShouldShow(!shouldShow);
    setTodos([]);
  }

  return (
    <ScrollView style={styles.container}>
      <Calendar
        onDayPress={(day) => {
          addDates(day);
          console.log("selected day", day);
        }}
        markedDates={markedDates}
      />
      <SafeAreaView>
        {shouldShow ? (
          <View style={styles.card}>
            <TodoInsert onAddTodo={addTodo} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    color: "#191919",
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

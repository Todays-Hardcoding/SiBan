import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { FlatGrid } from "react-native-super-grid";
import { FontAwesome } from "@expo/vector-icons";

const Strength = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const _url = "http://112.172.225.17:8282";
    fetch(_url + "/Goal.act", {
      method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          workoutGoal : "근력",
        }),
    })
    .then((response) => response.json())
    .then((data) => {
      setExercises(data);
      });
  }, []);

  const press = (part) => {
    const data = [];
    exercises.map((exercise, index) => {
      console.log(exercise.part);
      if (exercise.part === part) data.push(exercise);
      console.log(data);
    });
  };

  return (
    <View style={styles.Container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modal}>
          <TouchableOpacity
            style={styles.modalBtn}
            onPress={() => setModalVisible(false)}
          >
            <Text>Chest</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalBtn}
            onPress={() => setModalVisible(false)}
          >
            <Text>Shulders</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalBtn}
            onPress={() => setModalVisible(false)}
          >
            <Text>Triceps</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalBtn}
            onPress={() => setModalVisible(false)}
          >
            <Text>Biceps</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalBtn}
            onPress={() => setModalVisible(false)}
          >
            <Text>Core</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalBtn}
            onPress={() => setModalVisible(false)}
          >
            <Text>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalBtn}
            onPress={() => setModalVisible(false)}
          >
            <Text>Forearms</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalBtn}
            onPress={() => setModalVisible(false)}
          >
            <Text>Upper</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalBtn}
            onPress={() => setModalVisible(false)}
          >
            <Text>Calves</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.header}>
        <Text style={styles.text}>{exercises.length}개의 운동</Text>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <FontAwesome name="chevron-down" size={20} color="grey" />
        </TouchableOpacity>
      </View>
      <FlatGrid
        itemDimension={170}
        data={exercises}
        spacing={20}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.itemContainer, { backgroundColor: "lightgrey" }]}
            onPress={() =>
              navigation.navigate("StrengthNav", {
                screen: "StrengthDetail",
                params: { exercise: item },
              })
            }
          >
            <Text style={styles.itemName}>{item.workoutName}</Text>
            <Text style={styles.itemCode}>{item.workoutTarget}</Text>
            <Text style={styles.itemCode}>{item.workoutDescription}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    width: 320,
    height: 220,
  },
  modalBtn: {
    flex: 1,
    width: "100%",
    backgroundColor: "grey",
    borderWidth: 1,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  text: {
    color: "grey",
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: "grey",
  },
  itemCode: {
    fontSize: 12,
    fontWeight: "600",
    color: "grey",
  },
});

export default Strength;

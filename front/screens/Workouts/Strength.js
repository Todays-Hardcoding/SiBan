import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { FlatGrid } from "react-native-super-grid";
import { FontAwesome } from "@expo/vector-icons";

const parts = [
  "Triceps",
  "Chest",
  "Shulders",
  "Biceps",
  "Core",
  "Back",
  "Forearms",
  "Upper Legs",
  "Calves",
];
const exercises = [
  { name: "트라이셉스익스텐션", part: "Triceps" },
  { name: "딥스", part: "Chest" },
  { name: "킥백 덤벨", part: "Triceps" },
  { name: "트라이셉스 프레스 다운", part: "Triceps" },
  { name: "케이블 오버헤드 익스텐션", part: "Triceps" },
  { name: "벤치프레스", part: "Chest" },
  { name: "인클라인 벤치프레스", part: "Chest" },
  { name: "케이블 크로스 오버", part: "Chest" },
  { name: "풀오버", part: "Chest" },
  { name: "덤벨 레터럴 레이즈", part: "Shulders" },
  { name: "덤벨 프론트 레이즈", part: "Shulders" },
  { name: "벤트오버 레터렐 레이즈", part: "Shulders" },
  { name: "숄더 프레스", part: "Shulders" },
  { name: "바벨컬", part: "Biceps" },
  { name: "EZ바 컬", part: "Biceps" },
  { name: "덤벨컬", part: "Biceps" },
  { name: "해머컬", part: "Biceps" },
  { name: "컨센트레이션 컬", part: "Biceps" },
  { name: "데드리프트", part: "Back" },
  { name: "바벨로우", part: "Back" },
  { name: "풀업", part: "Back" },
  { name: "시티드 로우", part: "Back" },
  { name: "렛풀 다운", part: "Back" },
  { name: "업다운 플랭크", part: "Core" },
  { name: "브릿지", part: "Core" },
  { name: "슈퍼맨", part: "Core" },
  { name: "사이드 힙 레이즈", part: "Core" },
  { name: "사이드 플랭크 원레그 니업", part: "Core" },
  { name: "리스트 컬", part: "Forearms" },
  { name: "리스트 익스텐션", part: "Forearms" },
  { name: "스쿼트", part: "Upper Legs" },
  { name: "레그 프레스", part: "Upper Legs" },
  { name: "런지", part: "Upper Legs" },
  { name: "레그 익스텐션", part: "Upper Legs" },
  { name: "레그 컬", part: "Upper Legs" },
  { name: "카프 레이즈", part: "Calves" },
];

const Strength = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

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
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.part}</Text>
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

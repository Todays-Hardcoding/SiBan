import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  LinearGradient,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SectionGrid } from "react-native-super-grid";
import routine from "./RoutineRecord.js";

function Accomplished({ route, navigation }) {
  const { routineCount } = route.params;

  console.log(routineCount);

  const array = [
    {
      name: "Sample01",
      code: "#f1c40f",
      id: 0,
      src: require("../../assets/trophy/trophy0.png"),
      gray: "gray",
    },
    {
      name: "Sample01",
      code: "#c0392b",
      id: 1,
      src: require("../../assets/trophy/trophy1.png"),
      gray: "gray",
    },
    {
      name: "Sample02",
      code: "#2ecc71",
      id: 2,
      src: require("../../assets/trophy/trophy2.png"),
      gray: "gray",
    },
    {
      name: "Sample03",
      code: "#3498db",
      id: 3,
      src: require("../../assets/trophy/trophy3.png"),
      gray: "gray",
    },
    {
      name: "Sample04",
      code: "#9b59b6",
      id: 4,
      src: require("../../assets/trophy/trophy4.png"),
      gray: "gray",
    },
    {
      name: "Sample05",
      code: "#34495e",
      id: 5,
      src: require("../../assets/trophy/trophy5.png"),
      gray: "gray",
    },
    {
      name: "Sample06",
      code: "#16a085",
      id: 6,
      src: require("../../assets/trophy/trophy6.png"),
      gray: "gray",
    },
    {
      name: "Sample07",
      code: "#27ae60",
      id: 7,
      src: require("../../assets/trophy/trophy7.png"),
      gray: "gray",
    },
    {
      name: "Sample08",
      code: "#2980b9",
      id: 8,
      src: require("../../assets/trophy/trophy8.png"),
      gray: "gray",
    },
    {
      name: "Sample09",
      code: "#8e44ad",
      id: 9,
      src: require("../../assets/trophy/trophy9.png"),
      gray: "gray",
    },
    {
      name: "Sample10",
      code: "#2c3e50",
      id: 10,
      src: require("../../assets/trophy/trophy10.png"),
      gray: "gray",
    },
    {
      name: "Sample11",
      code: "#f1c40f",
      id: 11,
      src: require("../../assets/trophy/trophy11.png"),
      gray: "gray",
    },
    {
      name: "Sample12",
      code: "#e67e22",
      id: 12,
      src: require("../../assets/trophy/trophy12.png"),
      gray: "gray",
    },
    {
      name: "Sample13",
      code: "#e74c3c",
      id: 13,
      src: require("../../assets/trophy/trophy13.png"),
      gray: "gray",
    },
    {
      name: "Sample14",
      code: "#ecf0f1",
      id: 14,
      src: require("../../assets/trophy/trophy14.png"),
      gray: "gray",
    },
    {
      name: "Sample15",
      code: "#95a5a6",
      id: 15,
      src: require("../../assets/trophy/trophy15.png"),
      gray: "gray",
    },
    {
      name: "Sample16",
      code: "#f39c12",
      id: 16,
      src: require("../../assets/trophy/trophy16.png"),
      gray: "gray",
    },
    {
      name: "Sample17",
      code: "#d35400",
      id: 17,
      src: require("../../assets/trophy/trophy17.png"),
      gray: "gray",
    },
    {
      name: "Sample18",
      code: "#c0392b",
      id: 18,
      src: require("../../assets/trophy/trophy18.png"),
      gray: "gray",
    },
    {
      name: "Sample19",
      code: "#bdc3c7",
      id: 19,
      src: require("../../assets/trophy/trophy19.png"),
      gray: "gray",
    },
    {
      name: "Sample20",
      code: "#7f8c8d",
      id: 20,
      src: require("../../assets/trophy/trophy20.png"),
      gray: "gray",
    },
  ];

  for (let i = 0; i <= routineCount; i++) {
    array[i].gray = array[i].code;
  }

  // console.log("마지막 색" + array[0].gray);
  const grid = (
    <SectionGrid
      itemDimension={140}
      sections={[
        {
          title: "1단계",
          data: array.slice(0, 6),
        },
        {
          title: "2단계",
          data: array.slice(6, 12),
        },
        {
          title: "3단계",
          data: array.slice(12, 21),
        },
      ]}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Image
              style={styles.itemCode}
              source={item.src}
              backgroundColor={item.gray}
            />
          </View>
        </TouchableOpacity>
      )}
      style={styles.gridView}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
    >
      {array.map((list) => (
        <TouchableOpacity key={list.id}>
          <Image
            style={{ width: 150, height: 150 }}
            source={array[list.id].src}
          />
        </TouchableOpacity>
      ))}
    </SectionGrid>
  );

  return grid;
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  itemCode: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 5,
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    alignItems: "center",
    backgroundColor: "#636e72",
    color: "white",
    padding: 10,
  },
});

export default Accomplished;

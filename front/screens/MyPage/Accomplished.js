/*
import React from "react";
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

var numb = 0;

function Accomplished() {
  const array = [
    {
      name: "Sample01",
      code: "#1ab86b",
      id: 0,
      src: require("../../assets/trophy/trophy0.png"),
    },
    {
      name: "Sample01",
      code: "#1abc9c",
      id: 1,
      src: require("../../assets/trophy/trophy1.png"),
    },
    {
      name: "Sample02",
      code: "#2ecc71",
      id: 2,
      src: require("../../assets/trophy/trophy2.png"),
    },
    {
      name: "Sample03",
      code: "#3498db",
      id: 3,
      src: require("../../assets/trophy/trophy3.png"),
    },
    {
      name: "Sample04",
      code: "#9b59b6",
      id: 4,
      src: require("../../assets/trophy/trophy4.png"),
    },
    {
      name: "Sample05",
      code: "#34495e",
      id: 5,
      src: require("../../assets/trophy/trophy5.png"),
    },
    {
      name: "Sample06",
      code: "#16a085",
      id: 6,
      src: require("../../assets/trophy/trophy6.png"),
    },
    {
      name: "Sample07",
      code: "#27ae60",
      id: 7,
      src: require("../../assets/trophy/trophy7.png"),
    },
    {
      name: "Sample08",
      code: "#2980b9",
      id: 8,
      src: require("../../assets/trophy/trophy8.png"),
    },
    {
      name: "Sample09",
      code: "#8e44ad",
      id: 9,
      src: require("../../assets/trophy/trophy9.png"),
    },
    {
      name: "Sample10",
      code: "#2c3e50",
      id: 10,
      src: require("../../assets/trophy/trophy10.png"),
    },
    {
      name: "Sample11",
      code: "#f1c40f",
      id: 11,
      src: require("../../assets/trophy/trophy11.png"),
    },
    {
      name: "Sample12",
      code: "#e67e22",
      id: 12,
      src: require("../../assets/trophy/trophy12.png"),
    },
    {
      name: "Sample13",
      code: "#e74c3c",
      id: 13,
      src: require("../../assets/trophy/trophy13.png"),
    },
    {
      name: "Sample14",
      code: "#ecf0f1",
      id: 14,
      src: require("../../assets/trophy/trophy14.png"),
    },
    {
      name: "Sample15",
      code: "#95a5a6",
      id: 15,
      src: require("../../assets/trophy/trophy15.png"),
    },
    {
      name: "Sample16",
      code: "#f39c12",
      id: 16,
      src: require("../../assets/trophy/trophy16.png"),
    },
    {
      name: "Sample17",
      code: "#d35400",
      id: 17,
      src: require("../../assets/trophy/trophy17.png"),
    },
    {
      name: "Sample18",
      code: "#c0392b",
      id: 18,
      src: require("../../assets/trophy/trophy18.png"),
    },
    {
      name: "Sample19",
      code: "#bdc3c7",
      id: 19,
      src: require("../../assets/trophy/trophy19.png"),
    },
    {
      name: "Sample20",
      code: "#7f8c8d",
      id: 20,
      src: require("../../assets/trophy/trophy20.png"),
    },
  ];
  // trophyList.map((item, index)

  // const imageList = require(`../../assets/trophy/trophy${data}.png`);

  return (
    <SectionGrid
      itemDimension={140}
      // staticDimension={300}
      // fixed
      // spacing={20}
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
            <Image style={styles.itemCode} source={item.src} />
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
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
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
*/
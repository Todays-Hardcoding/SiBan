import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";

const Level3 = () => {
  const [items, setItems] = React.useState([
    { name: "CONCRETE", code: "#95a5a6" },
    { name: "ORANGE", code: "#f39c12" },
    { name: "PUMPKIN", code: "#d35400" },
    { name: "POMEGRANATE", code: "#c0392b" },
    { name: "SILVER", code: "#bdc3c7" },
    { name: "ASBESTOS", code: "#7f8c8d" },
  ]);

  return (
    <FlatGrid
      itemDimension={170}
      data={items}
      spacing={20}
      renderItem={({ item }) => (
        <TouchableOpacity style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Level3;
const styles = StyleSheet.create({
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
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
});

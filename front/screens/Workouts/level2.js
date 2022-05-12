import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";

const Level2 = () => {
  const [items, setItems] = React.useState([
    { name: "BELIZE HOLE", code: "#2980b9" },
    { name: "WISTERIA", code: "#8e44ad" },
    { name: "MIDNIGHT BLUE", code: "#2c3e50" },
    { name: "SUN FLOWER", code: "#f1c40f" },
    { name: "CARROT", code: "#e67e22" },
    { name: "ALIZARIN", code: "#e74c3c" },
    { name: "CLOUDS", code: "#ecf0f1" },
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

export default Level2;

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

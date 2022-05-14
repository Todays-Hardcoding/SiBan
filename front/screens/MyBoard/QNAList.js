import React, { useEffect, useState, Component } from "react";

import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const backgroundImage = require("..")

const QNAList = () => {
  return (
    <View style={styles.container}>
      <View></View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  header: {
    width: windowWidth * 0.9,
    
  },
});

export default QNAList;

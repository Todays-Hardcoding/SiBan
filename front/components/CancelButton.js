import React from "react";
import { TouchableOpacity, Text } from "react-native";

const CancelButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#c44569",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: 100,
        alignItems: "center",
      }}
      onPress={() =>
        navigation.navigate("LoginPage", {
          screen: "LoginHome",
        })
      }
    >
      <Text style={{ fontSize: 18, color: "white" }}>취소</Text>
    </TouchableOpacity>
  );
};
export default CancelButton;

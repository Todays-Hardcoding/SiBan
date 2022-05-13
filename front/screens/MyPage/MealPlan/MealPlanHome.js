import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const View = styled.View`
  flex: 1;
  padding: 0 30px;
  padding-top: 50px;
  background-color: #cab8ff;
`;
const Text = styled.Text`
  color: white;
  font-size: 38px;
  margin-bottom: 100px;
`;
const Btn = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  right: 50px;
  background-color: white;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  elevation: 5;
`;
const BtnText = styled.Text`
  color: black;
`;

const MealPlanHome = ({ navigation: { navigate } }) => (
  <View>
    <Text>나의 식단관리</Text>
    <Btn>
      <BtnText onPress={() => navigate("MealPlanWrite")}>
        <Ionicons name="add" color="black" size={40}></Ionicons>
      </BtnText>
    </Btn>
  </View>
);

export default MealPlanHome;

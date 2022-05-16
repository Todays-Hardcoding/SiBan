import React, { useEffect } from "react";
import { Alert, FlatList, ScrollView } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const View = styled.View`
  flex: 1;
  padding: 0 30px;
  padding-top: 50px;
  background-color: white;
`;
const Text = styled.Text`
  color: #cab8ff;
  font-size: 38px;
  margin-bottom: 70px;
  font-weight: 900;
`;
const Btn = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  right: 50px;
  background-color: #cab8ff;
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
const Record = styled.View`
  background-color: #cab8ff;
  flex-direction: row;
  padding: 10px 20px;
  border-radius: 10px;
  align-items: center;
  margin-bottom: 20px;
`;
const Grade = styled.Text`
  font-size: 24px;
  margin-right: 10px;
`;
const Message = styled.Text`
  font-size: 18px;
`;

const MealPlanHome = ({ navigation: { navigate } }) => {
  useEffect(() => {
    console.log(" DB받아와서 정보띄우기");
  }, []);

  return (
    <View>
      <Text>나의 식단 기록일기</Text>
      <ScrollView>
        {/* 반복문 해야댐 */}
        <Record>
          <Grade>😆</Grade>
          <Message>들어갈 메세지</Message>
        </Record>
        <Record>
          <Grade>😆</Grade>
          <Message>들어갈 메세지</Message>
        </Record>
      </ScrollView>
      <Btn>
        <BtnText onPress={() => navigate("MealPlanWrite")}>
          <Ionicons name="add" color="black" size={40}></Ionicons>
        </BtnText>
      </Btn>
    </View>
  );
};

export default MealPlanHome;

import React from "react";
import styled from "styled-components";

const View = styled.View`
  background-color: #cab8ff;
  flex: 1;
  padding: 0 30px;
`;
const Title = styled.Text`
  background-color: #cab8ff;
  color: white;
  margin: 50px 0;
  text-align: center;
  font-size: 28px;
  font-weight: 500;
`;
const TextInput = styled.TextInput`
  background-color: white;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 18px;
`;
const Btn = styled.TouchableOpacity`
  width: 100%;
  margin-top: 30px
  background-color: #B5DEFF
  padding: 10px 20px
  align-items: center;
  border-radius: 20px
`;
const BtnText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;
const GradeView = styled.View``;
const Grade = styled.Text``;

const grades = ["😄", "😎", "🙁", "😡", "😑", "😭"];
const MealPlanWrite = () => (
  <View>
    <Title>어떤 음식을 드셨나요?</Title>
    <GradeView>
      {grades.map((grade, index) => (
        <Grade key={index}>{grade}</Grade>
      ))}
    </GradeView>
    <TextInput placeholder="메뉴를 적으세요."></TextInput>
    <Btn>
      <BtnText>Save</BtnText>
    </Btn>
  </View>
);

export default MealPlanWrite;

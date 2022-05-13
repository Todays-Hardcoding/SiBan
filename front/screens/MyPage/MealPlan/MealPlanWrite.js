import React, { useState } from "react";
import { Alert } from "react-native";
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
const GradeView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Grade = styled.TouchableOpacity`
  background-color: white;
  elevation: 5;
  padding: 10px;
  border-radius: 15px;
  overflow: hidden;
  border-width: ${(props) => (props.selected ? "2px" : "0px")};
  border-color: blue;
`;
const GradeText = styled.Text`
  font-size: 24px;
`;

const grades = ["😆", "😄", "😎", "😑", "🙁", "😡", "😭"];
const MealPlanWrite = () => {
  const [selectedGrade, setGrade] = useState(null);
  const [foods, setFoods] = useState("");
  const onChangeText = (text) => setFoods(text);
  const onGradePress = (face) => setGrade(face);
  const onSubmit = () => {
    if (foods === "" || selectedGrade == null) {
      return Alert.alert("내용을 모두 입력해주세요.");
    }
  };

  return (
    <View>
      <Title>어떤 음식을 드셨나요?</Title>
      <GradeView>
        {grades.map((grade, index) => (
          <Grade
            selected={grade === selectedGrade}
            onPress={() => onGradePress(grade)}
            key={index}
          >
            <GradeText>{grade}</GradeText>
          </Grade>
        ))}
      </GradeView>
      <TextInput
        returnKeyLabel="done"
        onSubmitEditing={onSubmit}
        onChangeText={onChangeText}
        value={foods}
        placeholder="메뉴를 적으세요."
      ></TextInput>
      <Btn onPress={onSubmit}>
        <BtnText>Save</BtnText>
      </Btn>
    </View>
  );
};

export default MealPlanWrite;

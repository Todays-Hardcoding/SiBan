import React, { useState } from "react";
import { Alert, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
  margin-bottom: 20px;
`;
const Btn = styled.TouchableOpacity`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #B5DEFF;
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
const TimeView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Time = styled.TouchableOpacity`
  background-color: white;
  elevation: 5;
  padding: 10px;
  border-radius: 15px;
  overflow: hidden;
  border-width: ${(props) => (props.selected ? "2px" : "0px")};
  border-color: blue;
`;
const TimeText = styled.Text`
  font-size: 24px;
`;
const AddMinView = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;
const AddMin = styled.TouchableOpacity`
  background-color: white;
  elevation: 5;
  padding: 10px;
  border-radius: 15px;
  overflow: hidden;
  margin-left: 50px;
  height: 70px;
  width: 70px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;
const AddMinText = styled.Text`
  font-size: 40px;
`;

const grades = ["😆 diet meal", "😡 cheat meal"];
const times = ["🥙 아침", "🍱 점심", "🥘 저녁"];

const MealPlanWrite = ({ navigation: { goBack } }) => {
  const [selectedGrade, setGrade] = useState(null);
  const [selectedTime, setTime] = useState(null);
  const [foods, setFoods] = useState("");
  const [inputBox, setInputBox] = useState(1);
  const range = [...Array(inputBox)].map((v, i) => i);

  const onChangeText = (text) => setFoods(text);
  const onGradePress = (face) => setGrade(face);
  const onTimePress = (time) => setTime(time);

  const onSubmit = () => {
    if (selectedGrade == null) {
      return Alert.alert("식단을 선택하세요.");
    }
    if (foods === "") {
      return Alert.alert("내용을 모두 입력해주세요.");
    }

    // 저장하는 기능 추가해야댐
    setGrade(null);
    setFoods("");
    goBack();
  };

  return (
    <KeyboardAwareScrollView
      extraScrollHeight={10}
      style={{
        backgroundColor: "#cab8ff",
        flex: 1,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 30,
        paddingLeft: 30,
      }}
    >
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
      <TimeView>
        {times.map((time, index) => (
          <Time
            selected={time === selectedTime}
            onPress={() => onTimePress(time)}
            key={index}
          >
            <TimeText>{time}</TimeText>
          </Time>
        ))}
      </TimeView>

      {/* 반복으로 input 만들기 */}
      {range.map((inputCount, index) => {
        return (
          <TextInput
            key={inputCount}
            returnKeyLabel="done"
            onSubmitEditing={onSubmit}
            onChangeText={onChangeText}
            value={foods}
            placeholder="메뉴를 적으세요. (5개까지 추가 가능)"
          ></TextInput>
        );
      })}
      <AddMinView>
        <AddMin
          onPress={() => {
            if (inputBox != 5) {
              setInputBox(inputBox + 1);
            }
          }}
        >
          <AddMinText>+</AddMinText>
        </AddMin>
        <AddMin
          onPress={() => {
            if (inputBox > 1) {
              setInputBox(inputBox - 1);
            }
          }}
        >
          <AddMinText>-</AddMinText>
        </AddMin>
      </AddMinView>

      <Btn onPress={onSubmit}>
        <BtnText>Save</BtnText>
      </Btn>
    </KeyboardAwareScrollView>
  );
};

export default MealPlanWrite;

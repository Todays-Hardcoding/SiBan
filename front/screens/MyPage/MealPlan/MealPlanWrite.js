import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const View = styled.View`
  background-color: #cab8ff;
  flex: 1;
  padding: 0 30px;
`;
const Text = styled.Text`
  color: white;
  font-size: 38px;
  margin-bottom: 70px;
  font-weight: 900;
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
  padding-vertical: 10px;
  padding-horizontal: 30px;
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

const STORAGE_KEY = "@mealPlan";

const grades = ["😆 diet meal", "😡 cheat meal"];
const times = ["🥙 아침", "🍱 점심", "🥘 저녁"];

const MealPlanWrite = ({ navigation: { goBack } }) => {
  const [selectedGrade, setGrade] = useState(null);
  const [selectedTime, setTime] = useState(null);
  const [foods, setFoods] = useState("");
  const [mealPlan, setMealPlan] = useState({});

  const onGradePress = (face) => setGrade(face);
  const onTimePress = (time) => setTime(time);

  useEffect(() => {
    // loadMealPlan();
  }, []);

  const onSubmit = () => {
    if (selectedGrade === null) {
      return Alert.alert("식단을 선택하세요.");
    }
    if (selectedTime === null) {
      return Alert.alert("밥을 언제 먹었나요?");
    }
    if (foods === "") {
      return Alert.alert("메뉴를 적어주세요.");
    }

    const newMealPlan = {
      ...mealPlan,
      [Date.now()]: { foods, grade: selectedGrade, time: selectedTime },
    };
    setMealPlan(newMealPlan);
    setFoods("");
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
      <Text>나의 식단 기록일기</Text>
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

      <TextInput
        returnKeyLabel="done"
        // 전송버튼을 누를때
        onSubmitEditing={onSubmit}
        value={foods}
        placeholder="메뉴를 적으세요."
      ></TextInput>

      <Btn onPress={onSubmit}>
        <BtnText>Save</BtnText>
      </Btn>
    </KeyboardAwareScrollView>
  );
};

export default MealPlanWrite;

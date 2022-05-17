import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";

const View = styled.View`
  background-color: #cab8ff;
  flex: 1;
  padding: 0 30px;
`;
const MainText = styled.Text`
  color: white;
  font-size: 38px;
  // margin-bottom: 70px;
  font-weight: 900;
  margin-top: 20px;
`;
const Title = styled.Text`
  background-color: #cab8ff;
  color: white;
  margin-top: 10px;
  margin-right: 40px;
  margin-bottom: 20px
  text-align: right;
  font-size: 20px;
  font-weight: 500;
`;
const TextInput = styled.TextInput`
  background-color: white;
  border-radius: 20px;
  padding-vertical: 10px;
  padding-horizontal: 30px;
  font-size: 15px;
  margin-bottom: 20px;
`;
const Btn = styled.TouchableOpacity`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #B5DEFF;
  padding: 10px 20px
  align-items: center;
  border-radius: 20px;
`;
const BtnText = styled.Text`
  color: white;
  font-size: 15px;
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
  font-size: 18px;
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
  font-size: 18px;
`;
const MyMealScrollView = styled.ScrollView``;
const MyMealView = styled.View`
  background-color: white;
  margin-bottom: 10px;
  padding-vertical: 15px;
  padding-horizontal: 20px;
  border-radius: 15;
`;
const MyMealText = styled.Text``;
const MyMealDelete = styled.Text``;
const MyMealDeleteTouchableOpacity = styled.TouchableOpacity``;

const STORAGE_KEY = "@mealPlan";

const grades = ["😆 diet meal", "😡 cheat meal"];
const times = ["🥙 아침", "🍱 점심", "🥘 저녁"];

const MealPlanWrite = ({ navigation: { goBack } }) => {
  const [selectedGrade, setGrade] = useState(null);
  const [selectedTime, setTime] = useState(null);
  const [foods, setFoods] = useState("");
  const [mealPlan, setMealPlan] = useState({});

  useEffect(() => {
    loadMealPlan();
  }, []);

  const onGradePress = (face) => setGrade(face);
  const onTimePress = (time) => setTime(time);

  const onChangeFood = (payload) => setFoods(payload);
  const saveMealPlan = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };
  const loadMealPlan = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    setMealPlan(JSON.parse(s));
  };

  const addMealPlan = async () => {
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
    await saveMealPlan(newMealPlan);
    setFoods("");
  };
  const deleteTodo = (key) => {
    Alert.alert("나의 식단 지우기", "삭제하시겠습니까?", [
      { text: "취소" },
      {
        text: "삭제",
        onPress: () => {
          const newMealPlan = { ...mealPlan };
          delete newMealPlan[key];
          setMealPlan(newMealPlan);
          saveMealPlan(newMealPlan);
        },
      },
    ]);
  };

  return (
    <View
      style={{
        backgroundColor: "#cab8ff",
        flex: 1,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 30,
        paddingLeft: 30,
      }}
    >
      <MainText>나의 식단 기록일기</MainText>
      <Title>오늘 어떤 음식을 드셨나요?</Title>
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
        onSubmitEditing={addMealPlan}
        onChangeText={onChangeFood}
        value={foods}
        placeholder="메뉴를 적으세요."
      ></TextInput>

      <Btn onPress={addMealPlan}>
        <BtnText>Save</BtnText>
      </Btn>
      <MyMealScrollView>
        {Object.keys(mealPlan).map((key) => (
          <MyMealView key={key}>
            <MyMealText>{mealPlan[key].foods}</MyMealText>
            <MyMealDeleteTouchableOpacity onPress={() => deleteTodo(key)}>
              <MyMealDelete>❌</MyMealDelete>
            </MyMealDeleteTouchableOpacity>
          </MyMealView>
        ))}
      </MyMealScrollView>
    </View>
  );
};

export default MealPlanWrite;

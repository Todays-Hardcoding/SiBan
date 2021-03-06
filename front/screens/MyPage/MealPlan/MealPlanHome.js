import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const View = styled.View`
  background-color: #191919;
  flex: 1;
  padding: 0 30px;
`;
const Container = styled.View``;
const HeaderView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const MainText = styled.Text`
  color: white;
  font-size: 35px;
  font-weight: 900;
`;
const Title = styled.Text`
  background-color: #191919;
  color: white;
  margin-right: 40px;
  margin-bottom: 10px
  text-align: right;
  font-size: 20px;
  font-weight: 500;
`;
const ReadBtnTouchable = styled.TouchableOpacity`
  width: 50px
  height: 50px
  margin-top: 15px;
  margin-bottom: 10px;
  background-color: #808080;
  align-items: center;
  border-radius: 20px;
  padding: 10px
`;
const ReadModeText = styled.Text`
  color: white;
  font-weight: 700;
`;
const MealTimeInput = styled.TextInput`
  background-color: white;
  border-radius: 10px;
  padding-vertical: 10px;
  padding-horizontal: 15px;
  font-size: 15px;
  width: 30%;
`;
const MealInput = styled.TextInput`
  background-color: white;
  border-radius: 20px;
  padding-vertical: 10px;
  padding-horizontal: 30px;
  font-size: 15px;
  margin-bottom: 10px;
`;
const CommentInput = styled.TextInput`
  background-color: white;
  border-radius: 20px;
  padding-vertical: 10px;
  padding-horizontal: 30px;
  font-size: 15px;
  margin-bottom: 10px;
`;
const Btn = styled.TouchableOpacity`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 20px;
  background-color: #808080;
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
  margin-bottom: 10px;
`;
const Grade = styled.TouchableOpacity`
  background-color: white;
  elevation: 5;
  padding: 10px 15px;
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
  margin-bottom: 10px;
`;
const Time = styled.TouchableOpacity`
  background-color: white;
  elevation: 5;
  padding: 10px 15px;
  border-radius: 15px;
  overflow: hidden;
  border-width: ${(props) => (props.selected ? "2px" : "0px")};
  border-color: blue;
`;
const TimeText = styled.Text`
  font-size: 18px;
`;
const MyMealScrollView = styled.ScrollView``;
const MyMealDietView = styled.View`
  background-color: #63cdda;
  margin-bottom: 10px;
  padding-vertical: 15px;
  padding-horizontal: 20px;
  border-radius: 15;
`;
const MyMealCheatView = styled.View`
  background-color: #cf6a87;
  margin-bottom: 10px;
  padding-vertical: 15px;
  padding-horizontal: 20px;
  border-radius: 15;
`;
const MyMealText = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: 500;
`;
const MyMealFood = styled.Text`
  font-size: 27px;
  color: white;
  font-weight: 500;
  margin-bottom: 10px;
`;
const MyMealComment = styled.Text`
  font-size: 25px;
  color: white;
  font-weight: 500;
  margin-bottom: 10px;
`;
const MyMealDelete = styled.Text``;
const MyMealDeleteTouchableOpacity = styled.TouchableOpacity`
  align-items: flex-end;
`;
const MyMealWhenGradeTime = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const STORAGE_KEY = "@mealPlan";

const grades = ["???? diet", "???? cheat"];
const times = ["???? ??????", "???? ??????", "???? ??????"];

const MealPlanWrite = ({ navigation: { goBack } }) => {
  const [selectedGrade, setGrade] = useState(null);
  const [selectedTime, setTime] = useState(null);
  const [foods, setFoods] = useState("");
  const [comment, setComment] = useState("");
  const [when, setWhen] = useState("");
  const [readMode, setReadMode] = useState(true);
  const [mealPlan, setMealPlan] = useState({});

  useEffect(() => {
    loadMealPlan();
  }, []);

  const onGradePress = (face) => setGrade(face);
  const onTimePress = (time) => setTime(time);

  const onChangeFood = (payload) => setFoods(payload);
  const onChangeComment = (payload) => setComment(payload);
  const onChangeWhen = (payload) => setWhen(payload);

  const saveMealPlan = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };
  const loadMealPlan = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    s !== null ? setMealPlan(JSON.parse(s)) : null;
  };

  const addMealPlan = async () => {
    if (selectedGrade === null) {
      return Alert.alert("????????? ???????????????.");
    }
    if (selectedTime === null) {
      return Alert.alert("?????? ?????? ?????????????");
    }
    if (foods === "") {
      return Alert.alert("????????? ???????????????.");
    }

    const newMealPlan = {
      ...mealPlan,
      [Date.now()]: {
        when,
        selectedGrade,
        selectedTime,
        foods,
        comment,
      },
    };
    setMealPlan(newMealPlan);
    await saveMealPlan(newMealPlan);
    setFoods("");
    setGrade(null);
    setTime(null);
    setComment("");
    setWhen("");
  };
  const deleteTodo = (key) => {
    Alert.alert("?????? ?????? ?????????", "?????????????????????????", [
      { text: "??????" },
      {
        text: "??????",
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
    <View>
      <HeaderView>
        <MainText>?????? ?????? ????????????.</MainText>
        <ReadBtnTouchable onPress={() => setReadMode(!readMode)}>
          <ReadModeText>????????????</ReadModeText>
        </ReadBtnTouchable>
      </HeaderView>
      <Title>?????? ?????? ????????? ?????????????</Title>

      {readMode === true ? (
        <Container>
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

            <MealTimeInput
              returnKeyLabel="done"
              // ??????????????? ?????????
              onSubmitEditing={addMealPlan}
              onChangeText={onChangeWhen}
              value={when}
              placeholder="??????"
            ></MealTimeInput>
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
          <MealInput
            returnKeyLabel="done"
            // ??????????????? ?????????
            onSubmitEditing={addMealPlan}
            onChangeText={onChangeFood}
            value={foods}
            placeholder="????????? ????????????."
          ></MealInput>
          <CommentInput
            returnKeyLabel="done"
            // ??????????????? ?????????
            onSubmitEditing={addMealPlan}
            onChangeText={onChangeComment}
            value={comment}
            placeholder="??? ??? ??????."
          ></CommentInput>
          <Btn onPress={addMealPlan}>
            <BtnText>Save</BtnText>
          </Btn>
        </Container>
      ) : null}

      <MyMealScrollView>
        {Object.keys(mealPlan).map((key) =>
          mealPlan[key].selectedGrade === "???? diet" ? (
            <MyMealDietView key={key}>
              <MyMealWhenGradeTime>
                <MyMealText>??????: {mealPlan[key].when}</MyMealText>
                <MyMealText>{mealPlan[key].selectedGrade}</MyMealText>
                <MyMealText>{mealPlan[key].selectedTime}</MyMealText>
              </MyMealWhenGradeTime>
              <MyMealWhenGradeTime>
                <MyMealFood>{mealPlan[key].foods}</MyMealFood>
                <MyMealDeleteTouchableOpacity onPress={() => deleteTodo(key)}>
                  <MyMealDelete>???</MyMealDelete>
                </MyMealDeleteTouchableOpacity>
              </MyMealWhenGradeTime>
              <MyMealComment>{mealPlan[key].comment}</MyMealComment>
            </MyMealDietView>
          ) : (
            <MyMealCheatView key={key}>
              <MyMealWhenGradeTime>
                <MyMealText>??????: {mealPlan[key].when}</MyMealText>
                <MyMealText>{mealPlan[key].selectedGrade}</MyMealText>
                <MyMealText>{mealPlan[key].selectedTime}</MyMealText>
              </MyMealWhenGradeTime>
              <MyMealWhenGradeTime>
                <MyMealFood>{mealPlan[key].foods}</MyMealFood>
                <MyMealDeleteTouchableOpacity onPress={() => deleteTodo(key)}>
                  <MyMealDelete>???</MyMealDelete>
                </MyMealDeleteTouchableOpacity>
              </MyMealWhenGradeTime>
              <MyMealComment>{mealPlan[key].comment}</MyMealComment>
            </MyMealCheatView>
          )
        )}
      </MyMealScrollView>
    </View>
  );
};

export default MealPlanWrite;

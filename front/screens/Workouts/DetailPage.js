import React, { useEffect, useState } from "react";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DetailPage = ({ route, navigation }) => {
  const { result } = route.params;
  const [planStatus, setPlanStatus] = useState();
  const [plans, setPlans] = useState({});

  useEffect(() => {
    loadPlan()
  }, []);

  const rerendering = () => navigation.addListener('focus', () => loadPlan());

  const checkPlan = async() => {

    if(planStatus === true){
      deletePlan()
      setPlanStatus(false)
    }else {
      addPlan()
      setPlanStatus(true)
    }
  }

  const loadPlan = () => {
    AsyncStorage.getItem("Plans").then(value => {
      console.log(value)
      setPlans(JSON.parse(value))
    })
    console.log(plans[result.workoutName])
    if(plans[result.workoutName] !== null){
      console.log("나 있어유~")
    } else {
      console.log("나 없어유")
    }
  }

  const savePlan = (save) => {
    console.log("너 세이브니?")
    console.log(save)
    AsyncStorage.setItem("Plans", JSON.stringify(save))
  }

  const addPlan = () => {
    const newPlans = {
      ...plans,
      [result.workoutName] : result,
    }
    setPlans(newPlans)
    savePlan(newPlans)
  }

  const deletePlan = () => {
    const newPlans = {...plans};
    delete newPlans[result.workoutName]
    setPlans(newPlans)
    savePlan(newPlans)
  }

  return (
    <View style={styles.Container}>
      {/* <View>
        <Text>{plans !== null ? plans[result.workoutName]: "몰루"}</Text>
      </View> */}
      <ImageBackground
        source={require("../../assets/images/workout/workout1.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <MaterialIcons name="arrow-back-ios" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => checkPlan()}>
            <FontAwesome
              style={styles.headerBtn}
              name="bookmark"
              size={30}
              color={planStatus ? "yellow" : "black"}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.workoutNameText}>{result.workoutName}</Text>
      </ImageBackground>

      <View style={styles.workoutDescriptionView}>
        <Text style={styles.workoutDescriptionText}>
          {result.workoutDescription}
        </Text>
        <View>
          <View style={styles.workoutInfoView}>
            <Ionicons name="ios-battery-charging" size={30} color="white" />
            <Text style={styles.workoutInfo}>{result.workoutCourse}</Text>
          </View>
          <View style={styles.workoutInfoView}>
            <Ionicons name="fitness" size={30} color="white" />
            <Text style={styles.workoutInfo}>{result.workoutGoal}</Text>
          </View>
          <View style={styles.workoutInfoView}>
            <Ionicons name="body" size={30} color="white" />
            <Text style={styles.workoutInfo}>{result.workoutTarget}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    wordBreak: "keep-all",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    flex: 1.5,
    justifyContent: "center",
  },
  workoutNameText: {
    fontSize: 50,
    fontWeight: "500",
    color: "white",
    lineHeight: 550,
    marginLeft: 20,
  },
  workoutDescriptionView: {
    flex: 1,
    backgroundColor: "#252525",
    padding: 20,
  },
  workoutDescriptionText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 20,
  },
  bodyContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  workoutInfoView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 90,
  },
  workoutInfo: {
    color: "#e9e9e9",
    fontSize: 18,
    margin: 20,
  },
});

export default DetailPage;

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, Alert } from "react-native";
import { Dimensions } from "react-native";
import { SliderBox } from "react-native-image-slider-box"
import { FlatGrid } from "react-native-super-grid";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


export default function BoardMain({navigation}) {
    const [challenges, setchallenges] = React.useState([
        {name: "5월 주간 챌린지", detail: "이번 주에 10km을 달려보세요.", dueDate: "5"},
        {name: "5월 주간 챌린지", detail: "이번 주에 15km을 달려보세요.", dueDate: "5"},
        {name: "5월 주간 챌린지", detail: "이번 주에 20km을 달려보세요.", dueDate: "5"},
        {name: "5월 주간 챌린지", detail: "이번 주에 25km을 달려보세요.", dueDate: "5"},
    ]);
    

    return(
    <View>
        <Text>게시판 메인 페이지</Text>

        {/* 사진 슬라이더 */}
        <SliderBox
            images={[
              "https://source.unsplash.com/1024x768/?nature",
              "https://source.unsplash.com/1024x768/?water",
              "https://source.unsplash.com/1024x768/?girl",
              "https://source.unsplash.com/1024x768/?tree",
            ]}/>

        {/* 주간 챌린지 리스트 */}
        <FlatGrid
            itemDimension={windowWidth * 0.9}
            data={challenges}
            spacing={10}
            renderItem={({ item }) => (
              <TouchableOpacity
              onPress={() => {
                navigation.navigate("ChallengeDetailNav", { screen: "ChallengeDetail" });
              }}>
                {/* 챌린지 이미지 넣어야함! */}
                <Image></Image>
                <View style={styles.itemContainer}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemdetail}>{item.detail}</Text>
                  <Text style={styles.itemdetail}>{item.dueDate}일 남았습니다.</Text>
                </View>
              </TouchableOpacity>
            )}
        />

        {/* 고객센터 버튼 (임시) */}
        <View style={styles.container}>
          <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("ServiceCenter", { screen: "QNA" });
          }}
        >
          <Text style={styles.buttonText}>QNA</Text>
        </TouchableOpacity>
      </View>
    </View>
    
    );  
}

const styles = StyleSheet.create({
  container:{
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 5,
      padding: 10,
  },
  itemName: {
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "600",
  },
  itemdetail: {
    fontWeight: "600",
    fontSize: 12,
  },
  button: {
    width: windowWidth * 0.9,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
  },
});
  
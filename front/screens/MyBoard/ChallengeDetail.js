import React, { useEffect, useState, PureComponent } from "react";
import {
    View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import DropDownPicker from 'react-native-dropdown-picker';

const windowWidth = Dimensions.get("window").width;

export default function ChallengeDetail() {
    const [challenges, setchallenges] = React.useState([
        {name: "5월 주간 챌린지", detail: "이번 주에 10km을 달려보세요.", dueDate: "5"},
    ]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'}
    ]);
    return(
        <View>
        {/* 주간 챌린지 리스트 */}
        <FlatGrid
            itemDimension={windowWidth * 0.9}
            data={challenges}
            spacing={10}
            renderItem={({ item }) => (
              <View>
                {/* 챌린지 이미지 넣어야함! */}
                <Image></Image>
                <View style={styles.itemContainer}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemdetail}>{item.detail}</Text>
                  <Text style={styles.itemdetail}>{item.dueDate}일 남았습니다.</Text>
                </View>
              </View>
            )}
        />


        <DropDownPicker
              placeholder="상세 분류"
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />


        <View>
            <Text>달성율 그래프</Text>
        </View>

        <View>
            <Text>내 순위</Text>
        </View>

        <View>
            <Text>명예의 전당</Text>
        </View>

        <View>
            <Text>첼린지 시작하기 버튼</Text>
        </View>

        <View>
            <Text>챌린지 사진 뷰</Text>
            <Text>챌린지 사진 그리드</Text>
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
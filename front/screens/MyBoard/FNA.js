import React, { useEffect, useState } from "react";
import {
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";

const windowWidth = Dimensions.get("window").width;

const FNA = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* 자주 묻는 질문 생각해보기..*/}
        <Text style={styles.title}>자주묻는 질문 TOP 5</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="검색어를 입력해주세요"
          ></TextInput>
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.text}>검색</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>회원정보</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>추천코스</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>내플랜</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>식단관리</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>기타</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* horizontal line*/}
        <View style={styles.line}></View>
        <Collapse>
          <CollapseHeader>
            <View style={styles.accodionHeader}>
              <Text style={styles.collapseText} multiline={true}>
                닉네임을 변경하고 싶어요.
              </Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <View style={styles.accodionBody}>
              <Text style={styles.collapseText} multiline={true}>
                마이페이지에서 회원관리 페이지로 이동한 뒤 정보 수정 버튼을 눌러 닉네임을 변경하세요.
              </Text>
            </View>
          </CollapseBody>
        </Collapse>
        {/* 자주 묻는 질문 생각해보기*/}
        <Collapse>
          <CollapseHeader>
            <View style={styles.accodionHeader}>
              <Text style={styles.collapseText} multiline={true}>
                어떤 운동을 해야할지 모르겠어요.
              </Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <View style={styles.accodionBody}>
              <Text style={styles.collapseText} multiline={true}>
                사용자의 퍼포먼스에 따라 초급 - 중급 - 고급으로 나뉜 추천 코스를 이용해보세요.
              </Text>
            </View>
          </CollapseBody>
        </Collapse>
        {/* 자주 묻는 질문 생각해보기*/}
        <Collapse>
          <CollapseHeader>
            <View style={styles.accodionHeader}>
              <Text style={styles.collapseText} multiline={true}>
                식단을 기록하고 싶어요.
              </Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <View style={styles.accodionBody}>
              <Text style={styles.collapseText} multiline={true}>
                마이페이지를 통해 식단관리 페이지로 이동한 다음 우측 하단 버튼을 눌러서 오늘의 식단을 추가해보세요.
              </Text>
            </View>
          </CollapseBody>
        </Collapse>
        {/* 자주 묻는 질문 생각해보기*/}
        <Collapse>
          <CollapseHeader>
            <View style={styles.accodionHeader}>
              <Text style={styles.collapseText} multiline={true}>
                일정을 추가하고 싶어요.
              </Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <View style={styles.accodionBody}>
              <Text style={styles.collapseText} multiline={true}>
                마이페이지를 통해 일정관리 페이지로 이동한 다음 일정을 입력하고 ADD 버튼을 눌러 일정을 추가해보세요. 완료된 일정을 체크하고 삭제를 통해 관리해보세요.
              </Text>
            </View>
          </CollapseBody>
        </Collapse>
        {/* 자주 묻는 질문 생각해보기*/}
        <Collapse>
          <CollapseHeader>
            <View style={styles.accodionHeader}>
              <Text style={styles.collapseText} multiline={true}>
                탈퇴는 어떻게 하나요?
              </Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <View style={styles.accodionBody}>
              <Text style={styles.collapseText} multiline={true}>
                마이페이지에서 회원관리 페이지로 이동한 뒤 화면 하단에 회원탈퇴
                버튼을 누르세요.
              </Text>
            </View>
          </CollapseBody>
        </Collapse>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingBottom: 20
  },
  title: {
    fontSize: 20,
    marginTop: 30,
    fontWeight: "bold"
  },
  accodionHeader: {
    backgroundColor: "#DDDDDD",
    marginTop: 10,
    height: 50,
    justifyContent: "center",
    width: windowWidth * 0.9,
    padding: 10,
    borderRadius: 8
  },
  accodionBody: {
    //backgroundColor: "#9D9D9D",
    marginTop: 2,
    justifyContent: "center",
    width: windowWidth * 0.9,
    padding: 10,
  },
  text: {
    color:"white",
    fontWeight: "bold"
  },
  collapseText: {
    fontSize: 15
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#808e9b",
    alignItems: "center",
    justifyContent: "center",
    margin: 3,
    borderRadius: 8,
    height: 30,
    width: 120,
  },
  line: {
    borderWidth: 0.5,
    width: windowWidth * 0.9,
    borderColor: "black",
    margin: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
    marginTop: 30,
  },
  searchInput: {
    borderWidth: 1,
    width: windowWidth * 0.7,
    height: 40,
    padding: 10,
    borderRadius: 5,
    marginRight: 13,
    marginLeft: 20,
  },
  searchButton: {
    backgroundColor: "#34495e",
    borderRadius: 8,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.15,
    marginLeft: 10,
  },
});

export default FNA;

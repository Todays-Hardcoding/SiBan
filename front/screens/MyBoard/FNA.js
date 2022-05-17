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
            <Text>검색</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>회원정보</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>추천코스</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text>내플랜</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>챌린지</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>기타</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* horizontal line*/}
        <View style={styles.line}></View>
        <Collapse>
          <CollapseHeader>
            <View style={styles.accodionHeader}>
              <Text style={styles.text} multiline={true}>
                닉네임을 변경하고 싶어요.
              </Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <View style={styles.accodionBody}>
              <Text style={styles.text} multiline={true}>
                나중에 생각해보기 ~!
              </Text>
            </View>
          </CollapseBody>
        </Collapse>
        {/* 자주 묻는 질문 생각해보기..*/}
        <Collapse>
          <CollapseHeader>
            <View style={styles.accodionHeader}>
              <Text style={styles.text} multiline={true}>
                어떤 운동을 해야할지 모르겠어요.
              </Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <View style={styles.accodionBody}>
              <Text style={styles.text} multiline={true}>
                test
              </Text>
            </View>
          </CollapseBody>
        </Collapse>
        {/* 자주 묻는 질문 생각해보기.. 아코디언 삐져나오는거 하드코딩 해말어....*/}
        <Collapse>
          <CollapseHeader>
            <View style={styles.accodionHeader}>
              <Text style={styles.text} multiline={true}>
                순위는 어떻게 올릴수 있나요?
              </Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <View style={styles.accodionBody}>
              <Text style={styles.text} multiline={true}>
                test
              </Text>
            </View>
          </CollapseBody>
        </Collapse>
        {/* 자주 묻는 질문 생각해보기..*/}
        {/* 자주 묻는 질문 생각해보기.. 아코디언 삐져나오는거 하드코딩 해말어....*/}
        <Collapse>
          <CollapseHeader>
            <View style={styles.accodionHeader}>
              <Text style={styles.text} multiline={true}>
                챌린지에 실패할 경우 패널티가 있나요?
              </Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <View style={styles.accodionBody}>
              <Text style={styles.text} multiline={true}>
                test
              </Text>
            </View>
          </CollapseBody>
        </Collapse>
        {/* 자주 묻는 질문 생각해보기..*/}
        <Collapse>
          <CollapseHeader>
            <View style={styles.accodionHeader}>
              <Text style={styles.text} multiline={true}>
                탈퇴는 어떻게 하나요?
              </Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <View style={styles.accodionBody}>
              <Text style={styles.text} multiline={true}>
                마이페이지에서 회원정보 수정을 누른 뒤에 화면 하단에 회원탈퇴
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
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#B1BCE6",
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
    backgroundColor: "#F2C9E1",
    borderRadius: 8,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.15,
    marginLeft: 10,
  },
});

export default FNA;

import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const _url = "http://192.168.35.133:8282";
const Register = ({ route, navigation }) => {
  //아이디,비번,이메일,전화번호
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userTel, setUserTel] = useState("");
  //const [userAddr, setUserAddr] = useState("");
  const [userHeight, setUserHeight] = useState("");
  const [userWeight, setUserWeight] = useState("");
  //유효성
  const [idCheck, setIdCheck] = useState(false);
  const [pwCheck, setPwCheck] = useState(false);
  const [pwConfirmCheck, setPwConfirmCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [nameCheck, setNameCheck] = useState(false);
  const [telCheck, setTelCheck] = useState(false);
  const [heightCheck, setHeightCheck] = useState(false);
  const [weightCheck, setWeightCheck] = useState(false);
 
  //오류메세지
  const [idError, setIdError] = useState("");
  const [pwError, setPwError] = useState("");
  const [pwConfirmError, setPwConfirmError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [telError, setTelError] = useState("");
  const [heightError, setHeightError] = useState("");
  const [weightError, setWeightError] = useState("");
  //중복검사
  const [duplicatedId, setDuplicatedID] = useState(false);
  const [duplicatedEmail, setDuplicatedEmail] = useState(false);

  const { userAddr } = route.params;

  const onChangeId = () => {
    const idRegex = /^[A-Za-z]{1}[A-Za-z0-9_-]{3,19}$/;
    if (idRegex.test(userId) === false) {
      setIdCheck(false);
      setIdError("4자리 이상 영문자로 시작하는 아이디를 입력해주세요.");
    } else {
      setIdCheck(true);
    }
  };
  const onChangePw = () => {
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (pwRegex.test(userPw) === false) {
      setPwCheck(false);
      setPwError("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요");
    } else {
      setPwCheck(true);
    }
  };

  const onChangePw2 = () => {
    if (pwConfirm !== userPw) {
      setPwConfirmCheck(false);
      setPwConfirmError("비밀번호를 다시 확인해주세요.");
    } else {
      setPwConfirmCheck(true);
    }
  };

  const onChangeEmail = () => {
    const emailRegex =
      /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[0-9?A-z]+\.[A-z]{2}.?[A-z]{0,3}$/;
    if (!emailRegex.test(userEmail)) {
      setEmailError("이메일형식에 맞게 다시 입력해주세요");
      setEmailCheck(false);
    } else {
      setEmailCheck(true);
    }
  };
  const onChangeName = () => {
    if (userName.trim().length === 0) {
      setNameCheck(false);
      setNameError("이름을 다시 입력해주세요");
    } else {
      setNameCheck(true);
    }
  };
  const onChangeTel = () => {
    const telRegex = /^[0-9]{8,13}$/;
    if (!telRegex.test(userTel)) {
      setTelCheck(false);
      setTelError("(-)를 제외한 전화번호을 다시 입력해주세요");
    } else {
      setTelCheck(true);
    }
  };
  const onChangeWeight = () => {
    const weightRegex = /^[0-9].{0,2}$/;
    if (!weightRegex.test(userWeight)) {
      setWeightCheck(false);
      setWeightError("몸무게를 다시 입력해주세요");
    } else {
      setWeightCheck(true);
    }
  };
  const onChangeHeight = () => {
    const heightRegex = /^[0-9].{0,2}$/;
    if (!heightRegex.test(userHeight)) {
      setHeightCheck(false);
      setHeightError("키를 다시 입력해주세요.");
    } else {
      setHeightCheck(true);
    }
  };
  // 회원가입에 간한 함수
  const postRegister = (e) => {
    // setAddr(result);
    if (
      idCheck === true &&
      pwCheck === true &&
      pwConfirmCheck === true &&
      emailCheck === true &&
      nameCheck === true &&
      telCheck === true &&
      heightCheck === true &&
      weightCheck === true &&
      duplicatedId === true &&
      duplicatedEmail === true
    ) {
      fetch(_url + "/register.act", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          userPw,
          userEmail,
          userName,
          userTel,
          userAddr,
          userHeight,
          userWeight,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          navigation.navigate("LoginPage", {
            screen: "LoginHome",
          });
        });
    } else {
      onChangeId();
      onChangePw();
      onChangeEmail();
      onChangeName();
      onChangeTel();
      onChangeHeight();
      onChangeWeight();
      alert("모두 입력해 주세요.");
      return false;
    }
  };
  // 아이디 중복체크에 관한 함수
  const checkId = () => {
    const idRegex = /^[A-Za-z]{1}[A-Za-z0-9_-]{3,19}$/;
    if (idRegex.test(userId) === false) {
      alert("4자리 이상 영문자로 시작하는 아이디를 입력해주세요.");
    } else {
      fetch(_url + "/checkId.act", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.checkId === true) {
            console.log(data.checkId);
            alert("사용 불가능아이디");
          } else {
            alert("사용 가능");
            setDuplicatedID(true);
          }
        });
    }
  };

  // 이메일 중복체크에 관한 함수
  const checkEmail = () => {
    const emailRegex =
      /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[0-9?A-z]+\.[A-z]{2}.?[A-z]{0,3}$/;
    if (!emailRegex.test(userEmail)) {
      alert("이메일형식에 맞게 다시 입력해주세요");
    } else {
      fetch(_url + "/checkEmail.act", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: userEmail,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.checkEmail);

          if (data.checkEmail === true) {
            alert("사용 불가능한 Email");
          } else {
            alert("사용 가능");
            setDuplicatedEmail(true);
          }
        });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 90,
        width: "100%",
      }}
    >
      <KeyboardAwareScrollView
        extraScrollHeight={10}
        style={{
          // flex: 1,
          backgroundColor: "#fff",
          width: "100%",
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginTop: 40,
              justifyContent: "center",
            }}
          >
            시반 회원가입
          </Text>
          <Text
            style={{
              color: "gray",
              justifyContent: "center",
              width: "50%",
              alignItems: "center",
            }}
          >
            {"\n"}멤버가 되어 시반이 제공하는 {"\n"}
            최고의 제품과 혜택을 만나보세요 {"\n"}{" "}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              style={styles.inputId}
              value={userId}
              onChangeText={(text) => setUserId(text)}
              onEndEditing={() => onChangeId()}
              returnKeyType="next"
              // autoFocus={true}
              placeholder="아이디를 입력해주세요."
            />
            {/* 아이디 중복확인 버튼 */}
            <TouchableOpacity
              style={{
                backgroundColor: "gray",
                padding: 5,
                margin: 5,
                borderRadius: 10,
                width: 60,
                alignItems: "center",
              }}
              onPress={checkId}
            >
              <Text style={{ fontSize: 13, color: "white" }}>중복확인</Text>
            </TouchableOpacity>
          </View>
          {!idCheck && <Text style={{ color: "red" }}>{idError}</Text>}

          <TextInput
            style={styles.input}
            value={userPw}
            returnKeyType="next"
            onChangeText={(text) => setUserPw(text)}
            onEndEditing={() => onChangePw()}
            secureTextEntry={true}
            placeholder={"비밀번호를 입력해주세요"}
          />
          {!pwCheck && <Text style={{ color: "red" }}>{pwError}</Text>}

          <TextInput
            style={styles.input}
            value={pwConfirm}
            returnKeyType="next"
            onChangeText={(text) => setPwConfirm(text)}
            onEndEditing={() => onChangePw2()}
            secureTextEntry={true}
            placeholder={"비밀번호를 다시 입력해주세요"}
          />
          {!pwConfirmCheck && (
            <Text style={{ color: "red" }}>{pwConfirmError}</Text>
          )}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              style={styles.inputId}
              value={userEmail}
              returnKeyType="next"
              onChangeText={(text) => setUserEmail(text)}
              onEndEditing={() => onChangeEmail()}
              placeholder={"이메일을 입력해주세요."}
            />
            {/* 이메일 중복확인 버튼 */}
            <TouchableOpacity
              style={{
                backgroundColor: "gray",
                padding: 5,
                margin: 5,
                borderRadius: 10,
                width: 60,
                alignItems: "center",
              }}
              onPress={checkEmail}
            >
              <Text style={{ fontSize: 13, color: "white" }}>중복확인</Text>
            </TouchableOpacity>
          </View>
          {!emailCheck && <Text style={{ color: "red" }}>{emailError}</Text>}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.inputId}>{userAddr}</Text>
            {/* 주소검색 버튼 */}
            <TouchableOpacity
              style={{
                backgroundColor: "gray",
                padding: 5,
                margin: 5,
                borderRadius: 10,
                width: 60,
                alignItems: "center",
              }}
              onPress={() =>
                navigation.navigate("address", {
                  screen: "address",
                })
              }
            >
              <Text style={{ fontSize: 13, color: "white" }}>주소검색</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            value={userName}
            returnKeyType="next"
            onChangeText={(text) => setUserName(text)}
            onEndEditing={() => onChangeName()}
            placeholder={"이름을 입력해주세요."}
          />
          {!nameCheck && <Text style={{ color: "red" }}>{nameError}</Text>}
          <TextInput
            style={styles.input}
            value={userTel}
            onChangeText={(text) => setUserTel(text)}
            onEndEditing={() => onChangeTel()}
            placeholder={"휴대폰번호를 입력해주세요."}
            returnKeyType="next"
          />
          {!telCheck && <Text style={{ color: "red" }}>{telError}</Text>}

          <TextInput
            style={styles.input}
            value={userHeight}
            returnKeyType="next"
            onChangeText={(text) => setUserHeight(text)}
            onEndEditing={() => onChangeHeight()}
            placeholder={"키를 입력해주세요."}
          />

          {!heightCheck && <Text style={{ color: "red" }}>{heightError}</Text>}

          <TextInput
            style={styles.input}
            value={userWeight}
            returnKeyType="next"
            onChangeText={(text) => setUserWeight(text)}
            onEndEditing={() => onChangeWeight()}
            placeholder={"몸무게를 입력해주세요."}
          />
          {!weightCheck && <Text style={{ color: "red" }}>{weightError}</Text>}

          <View style={styles.BtnBox}>
            {/* 가입버튼 */}
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                padding: 10,
                margin: 10,
                borderRadius: 10,
                width: 100,
                alignItems: "center",
              }}
              onPress={(event) => postRegister(event)}
            >
              <Text style={{ fontSize: 15, color: "#ececec" }}>register</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "gray",
                padding: 10,
                margin: 10,
                borderRadius: 10,
                width: 100,
                alignItems: "center",
              }}
              onPress={() =>
                navigation.navigate("LoginPage", {
                  screen: "LoginHome",
                })
              }
            >
              <Text style={{ fontSize: 15, color: "white" }}>cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 5,
    width: "80%",
  },
  inputId: {
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 5,
    width: "62%",
  },
  idCheckBtn: {},
  BtnBox: {
    flexDirection: "row",
  },
});

export default Register;

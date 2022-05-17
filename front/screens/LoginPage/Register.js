import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RegisterButton from "../../components/RegisterButton";
import CancelButton from "../../components/CancelButton";
import { TouchableOpacity } from "react-native-gesture-handler";

const Register = ({ navigation }) => {
  //아이디,비번,이메일,전화번호
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  //유효성
  const [idCheck, setIdCheck] = useState(false);
  const [pwCheck, setPwCheck] = useState(false);
  const [pwConfirmCheck, setPwConfirmCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [nameCheck, setNameCheck] = useState(false);
  const [telCheck, setTelCheck] = useState(false);
  const [heightCheck, setHeightCheck] = useState(false);
  const [weightCheck, setWeightCheck] = useState(false);
  const [disable, setDisable] = useState(false);
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
  const [checkIdVal, setCheckIdVal] = useState(false);
  console.log(id);

  const onChangeId = (text) => {
    const idRegex = /^[A-Za-z]{1}[A-Za-z0-9_-]{3,19}$/;
    if (!idRegex.test(text)) {
      setIdCheck(false);
      setIdError("4자리 이상 영문자로 시작하는 아이디를 입력해주세요.");
    } else {
      setIdCheck(true);
    }
    setId(text);
    console.log(idCheck);
    console.log(id);
  };
  const onChangePw = (text) => {
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!pwRegex.test(text)) {
      setPwCheck(false);
      setPwError("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요");
    } else {
      setPwCheck(true);
    }
    setPw(text);
    console.log(pwCheck);
    console.log(pw);
  };

  const onChangePw2 = (text) => {
    if (text !== pw) {
      setPwConfirmCheck(false);
      setPwConfirmError("비밀번호를 다시 확인해주세요.");
    } else {
      setPwConfirmCheck(true);
    }
    setPwConfirm(text);
    console.log(pwConfirmCheck);
    console.log(pwConfirm);
  };

  const onChangeEmail = (text) => {
    const emailRegex =
      /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[0-9?A-z]+\.[A-z]{2}.?[A-z]{0,3}$/;
    if (!emailRegex.test(text)) {
      console.log(emailRegex.test(text));
      setEmailError("이메일형식에 맞게 다시 입력해주세요");
      setEmailCheck(false);
    } else {
      setEmailCheck(true);
    }
    setEmail(text);
    //console.log(pwCheck);
    //console.log(pw);
  };
  const onChangeName = (text) => {
    if (text.trim().length === 0) {
      setNameCheck(false);
      setNameError("이름을 다시 입력해주세요");
    } else {
      setNameCheck(true);
    }
    setName(text);
    console.log(nameCheck);
    console.log(name);
  };
  const onChangeTel = (text) => {
    const telRegex = /^[0-9]{8,13}$/;
    if (!telRegex.test(text)) {
      setTelCheck(false);
      setTelError("(-)를 제외한 전화번호을 다시 입력해주세요");
    } else {
      setTelCheck(true);
    }
    setTel(text);
    console.log(telCheck);
    console.log(tel);
  };
  const onChangeWeight = (text) => {
    const weightRegex = /^[0-9].{0,2}$/;
    if (!weightRegex.test(text)) {
      setWeightCheck(false);
      setWeightError("몸무게(kg)를 다시 입력해주세요");
    } else {
      setWeightCheck(true);
    }
    setWeight(text);
  };
  const onChangeHeight = (text) => {
    const heightRegex = /^[0-9].{0,2}$/;
    if (!heightRegex.test(text)) {
      setHeightCheck(false);
      setHeightError("키(cm)를 다시 입력해주세요.");
    } else {
      setHeightCheck(true);
    }
    setHeight(text);
  };
  // 회원가입에 간한 함수
  const postRegister = () => {
    const _url = "http://192.168.0.6:8282/register.act";
    if (!checkIdVal) {
      alert("아이디 중복확인을 해주세요.");
    } else {
      fetch(_url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          pw,
          email,
          name,
          tel,
          height,
          weight,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          navigation.navigate("LoginPage", {
            screen: "LoginHome",
          });
          console.log(data);
        });
    }
  };
  // 아이디 중복체크에 관한 함수
  const checkId = () => {
    setCheckIdVal(false);
    console.log("버튼 누른 즉시 checkIdVal", checkIdVal);
    const _url = "http://192.168.0.6:8282/checkId.act";
    fetch(_url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCheckIdVal(data.value);
        console.log(data.value[checkId]);
        console.log("백 확인후 checkIdVal", checkIdVal);
        if (checkIdVal === true) {
          alert("중복된아이디");
          console.log("중복된아이디일때 checkIdVal", checkIdVal);
        } else {
          alert("사용가능아이디");
          console.log("사용가능아이디일때 checkIdVal", checkIdVal);
        }
      });
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
              fontSize: 40,
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
              value={id}
              onChangeText={(text) => onChangeId(text)}
              returnKeyType="next"
              // autoFocus={true}
              placeholder="아이디를 입력해주세요."
            />
            {/* 아이디 중복확인 버튼 */}
            <TouchableOpacity
              style={{
                backgroundColor: "#778beb",
                padding: 10,
                margin: 10,
                borderRadius: 10,
                width: 100,
                alignItems: "center",
              }}
              onPress={checkId}
            >
              <Text style={{ fontSize: 18, color: "white" }}>중복확인</Text>
            </TouchableOpacity>
          </View>
          {!idCheck && <Text style={{ color: "red" }}>{idError}</Text>}

          <TextInput
            style={styles.input}
            value={pw}
            returnKeyType="next"
            onChangeText={(text) => onChangePw(text)}
            secureTextEntry={true}
            placeholder={"비밀번호를 입력해주세요"}
          />
          {!pwCheck && <Text style={{ color: "red" }}>{pwError}</Text>}

          <TextInput
            style={styles.input}
            value={pwConfirm}
            returnKeyType="next"
            onChangeText={(text) => onChangePw2(text)}
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
              value={email}
              returnKeyType="next"
              onChangeText={(text) => onChangeEmail(text)}
              placeholder={"이메일을 입력해주세요."}
            />
            {/* 이메일 중복확인 버튼 */}
            <TouchableOpacity
              style={{
                backgroundColor: "#778beb",
                padding: 10,
                margin: 10,
                borderRadius: 10,
                width: 100,
                alignItems: "center",
              }}
              onPress={() => {}}
            >
              <Text style={{ fontSize: 18, color: "white" }}>중복확인</Text>
            </TouchableOpacity>
          </View>
          {!emailCheck && <Text style={{ color: "red" }}>{emailError}</Text>}

          <TextInput
            style={styles.input}
            value={name}
            returnKeyType="next"
            onChangeText={(text) => onChangeName(text)}
            placeholder={"이름을 입력해주세요."}
          />
          {!nameCheck && <Text style={{ color: "red" }}>{nameError}</Text>}
          <TextInput
            style={styles.input}
            value={tel}
            onChangeText={(text) => onChangeTel(text)}
            placeholder={"휴대폰번호를 입력해주세요."}
            returnKeyType="next"
          />
          {!telCheck && <Text style={{ color: "red" }}>{telError}</Text>}

          <TextInput
            style={styles.input}
            value={height}
            returnKeyType="next"
            onChangeText={(text) => onChangeHeight(text)}
            placeholder={"키를 입력해주세요."}
          />

          {!heightCheck && <Text style={{ color: "red" }}>{heightError}</Text>}

          <TextInput
            style={styles.input}
            value={weight}
            returnKeyType="next"
            onChangeText={(text) => onChangeWeight(text)}
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
              onPress={postRegister}
            >
              <Text style={{ fontSize: 18, color: "white" }}>가입</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#c44569",
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
              <Text style={{ fontSize: 18, color: "white" }}>취소</Text>
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
    width: "50%",
  },
  idCheckBtn: {},
  BtnBox: {
    flexDirection: "row",
  },
});

export default Register;

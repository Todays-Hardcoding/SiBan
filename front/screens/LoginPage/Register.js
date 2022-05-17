import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
  const [checkIdVal, setCheckIdVal] = useState(true);

  const register = () => {
    const _url = "http://192.168.45.96:8282/register.act";

    fetch(_url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        pw,
        pwConfirm,
        email,
        name,
        tel,
        height,
        weight,
      }),
    }).then((response) => response.json());
  };

  const onChangeId = (text) => {
    const idRegex = /^[A-Za-z]{1}[A-Za-z0-9_-]{3,19}$/;
    if (idRegex.test(id) === false) {
      setIdCheck(false);
      setIdError("4자리 이상 영문자로 시작하는 아이디를 입력해주세요.");
    } else {
      setIdCheck(true);
    }
    setId(text);
  };
  const onChangePw = () => {
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (pwRegex.test(pw) === false) {
      setPwCheck(false);
      setPwError("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요");
    } else {
      setPwCheck(true);
    }
    setPw(text);
  };

  const onChangePw2 = () => {
    if (pwConfirm !== pw) {
      setPwConfirmCheck(false);
      setPwConfirmError("비밀번호를 다시 확인해주세요.");
    } else {
      setPwConfirmCheck(true);
    }
    setPwConfirm(text);
  };

  const onChangeEmail = () => {
    const emailRegex =
      /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[0-9?A-z]+\.[A-z]{2}.?[A-z]{0,3}$/;
    if (!emailRegex.test(text)) {
      setEmailError("이메일형식에 맞게 다시 입력해주세요");
      setEmailCheck(false);
    } else {
      setEmailCheck(true);
    }
    setEmail(text);
  };
  const onChangeName = () => {
    if (name.trim().length === 0) {
      setNameCheck(false);
      setNameError("이름을 다시 입력해주세요");
    } else {
      setNameCheck(true);
    }
    setName(text);
  };
  const onChangeTel = () => {
    const telRegex = /^[0-9]{8,13}$/;
    if (!telRegex.test(tel)) {
      setTelCheck(false);
      setTelError("(-)를 제외한 전화번호을 다시 입력해주세요");
    } else {
      setTelCheck(true);
    }
    setTel(text);
  };
  const onChangeWeight = () => {
    const weightRegex = /^[0-9].{0,2}$/;
    if (!weightRegex.test(weight)) {
      setWeightCheck(false);
      setWeightError("몸무게(kg)를 다시 입력해주세요");
    } else {
      setWeightCheck(true);
    }
  };
  const onChangeHeight = () => {
    const heightRegex = /^[0-9].{0,2}$/;
    if (!heightRegex.test(height)) {
      setHeightCheck(false);
      setHeightError("키(cm)를 다시 입력해주세요.");
    } else {
      setHeightCheck(true);
    }
  };
  // 회원가입에 간한 함수
  const postRegister = () => {
    const _url = "http://192.168.35.133:8282/register.act";
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
        });
    }
  };
  // 아이디 중복체크에 관한 함수
  const checkId = () => {
    const _url = "http://192.168.45.96:8282/checkId.act";
    fetch(_url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
          <Text></Text>
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
              onChangeText={(text) => setId(text)}
              onEndEditing={() => onChangeId()}
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
            onChangeText={(text) => setPw(text)}
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
              value={email}
              returnKeyType="next"
              onChangeText={(text) => setEmail(text)}
              onEndEditing={() => onChangeEmail()}
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
              onPress={checkEmail}
            >
              <Text style={{ fontSize: 18, color: "white" }}>중복확인</Text>
            </TouchableOpacity>
          </View>
          {!emailCheck && <Text style={{ color: "red" }}>{emailError}</Text>}
          <TextInput
            style={styles.input}
            value={name}
            returnKeyType="next"
            onChangeText={(text) => setName(text)}
            onEndEditing={() => onChangeName()}
            placeholder={"이름을 입력해주세요."}
          />
          {!nameCheck && <Text style={{ color: "red" }}>{nameError}</Text>}
          <TextInput
            style={styles.input}
            value={tel}
            onChangeText={(text) => setTel(text)}
            onEndEditing={() => onChangeTel()}
            placeholder={"휴대폰번호를 입력해주세요."}
            returnKeyType="next"
          />
          {!telCheck && <Text style={{ color: "red" }}>{telError}</Text>}
          <TextInput
            style={styles.input}
            value={height}
            returnKeyType="next"
            onChangeText={(text) => setHeight(text)}
            onEndEditing={() => onChangeHeight()}
            placeholder={"키를 입력해주세요."}
          />
          {!heightCheck && <Text style={{ color: "red" }}>{heightError}</Text>}
          <TextInput
            style={styles.input}
            value={weight}
            returnKeyType="next"
            onChangeText={(text) => setWeight(text)}
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

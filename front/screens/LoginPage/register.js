import React from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import RegisterButton from "../../components/RegisterButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Register = () => {
  return (
    <KeyboardAwareScrollView extraScrollHeight={30}>
      <View style={styles.registerContainer}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>시반 회원가입</Text>
        <Text style={{ color: "gray", justifyContent: "center" }}>
          {"\n"}멤버가 되어 시반이 제공하는 {"\n"}
          최고의 제품과 혜택을 만나보세요 {"\n"}{" "}
        </Text>
        <TextInput style={styles.input} placeholder="아이디를 입력해주세요." />
        <TextInput
          style={styles.input}
          placeholder={"비밀번호를 입력해주세요"}
        />
        <TextInput
          style={styles.input}
          placeholder={"이메일을 입력해주세요."}
        />
        <TextInput style={styles.input} placeholder={"이름을 입력해주세요."} />
        <TextInput
          style={styles.input}
          placeholder={"휴대폰번호를 입력해주세요."}
        />
        <TextInput style={styles.input} placeholder={"키를 입력해주세요."} />
        <TextInput
          style={styles.input}
          placeholder={"몸무게를 입력해주세요."}
        />

        <RegisterButton />
      </View>
    </KeyboardAwareScrollView>
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

    marginVertical: 10,
    width: "90%",
  },
});

export default Register;

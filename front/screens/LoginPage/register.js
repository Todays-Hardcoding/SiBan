import React,{useState, useRef, useEffect} from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import RegisterButton from "../../components/RegisterButton";
import{  KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';


const Register = () => {
  //아이디,비번,이메일,전화번호
  const [id, setId] =useState('');
  const [pw, setPw]=useState('');
  const [email, setEmail]=useState('');
  const [name, setName]=useState('');
  const [tel, setTel]=useState('');
  //유효성
  const [idCheck, setIdCheck] = useState(false);
  const [pwCheck, setPwCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [nameCheck, setNameCheck] = useState(false);
  const [telCheck, setTelCheck] = useState(false);
  //오류메세지
  const [idError, setIdError] = useState("");
  const [pwError, setPwError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [telError, setTelError] = useState("");

  console.log(id);

  const  onChangeId =(text) => {
    const idRegex =/^[A-Za-z]{1}[A-Za-z0-9_-]{3,19}$/;
    if (!idRegex.test(text)) {
      setIdCheck(false);
      setIdError("4자리 이상 영문자로 시작하는 아이디를 입력해주세요.")
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
      setPwError("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요")
    } else {
      setPwCheck(true);
    }
    setPw(text);
    console.log(pwCheck);
    console.log(pw);
  };

    
    const onChangeEmail= (text) => { 
      const emailRegex =
      /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[0-9?A-z]+\.[A-z]{2}.?[A-z]{0,3}$/;
      if (!emailRegex.test(text)) {
        console.log(emailRegex.test(text))
        setEmailError("이메일형식에 맞게 다시 입력해주세요")
        setEmailCheck(false)
      }else{
        setEmailCheck(true);
      }
      setEmail(text);
      //console.log(pwCheck);
      //console.log(pw);
    };
    const  onChangeName =(text) => {
      if (text.trim().length === 0) {
        setNameCheck(false);
        setNameError("이름을 다시 입력해주세요")
      } else {
        setNameCheck(true);
      }
      setName(text);
      console.log(nameCheck);
      console.log(name);
    };
    const  onChangeTel =(text) => {
      const telRegex = /^[0-9]{8,13}$/;
      if (!telRegex.test(text)) {
        setTelCheck(false);
        setTelError("(-)를 제외한 전화번호을 다시 입력해주세요")
      } else {
        setTelCheck(true);
      }
      setTel(text);
      console.log(telCheck);
      console.log(tel);
    };
  return (
    <KeyboardAwareScrollView
    extraScrollHeight={10}>
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>시반 회원가입</Text>
      <Text style={{ color: "gray", justifyContent: "center" }}>
        {"\n"}멤버가 되어 시반이 제공하는 {"\n"}
        최고의 제품과 혜택을 만나보세요 {"\n"}{" "}
      </Text>
      <TextInput style={styles.input}
      value={id}
      onChangeText={(text) => onChangeId(text)}
      returnKeyType="next"
      autoFocus={true}
      placeholder="아이디를 입력해주세요." />
     {!idCheck && <Text style={{color:"red"}}>{idError}</Text>}

      
     
      <TextInput style={styles.input} 
      value={pw}
      returnKeyType="next"
      onChangeText={(text) => onChangePw(text)}
      secureTextEntry={true}
      placeholder={"비밀번호를 입력해주세요"} />
      {!pwCheck && <Text style={{color:"red"}}>{pwError}</Text>}

      <TextInput style={styles.input} 
      value={email}
      returnKeyType="next"
      onChangeText={(text) => onChangeEmail(text)}
      placeholder={"이메일을 입력해주세요."} />
      {!emailCheck && <Text style={{color:"red"}}>{emailError}</Text>}

      <TextInput style={styles.input} 
      value={name}
      returnKeyType="next"
      onChangeText={(text) => onChangeName(text)}
      placeholder={"이름을 입력해주세요."} />
      {!nameCheck && <Text style={{color:"red"}}>{nameError}</Text>}
      <TextInput
        style={styles.input}
        value={tel}
        onChangeText={(text) => onChangeTel(text)}
        placeholder={"휴대폰번호를 입력해주세요."}
        returnKeyType="next"/>
        {!telCheck && <Text style={{color:"red"}}>{telError}</Text>}

      <TextInput style={styles.input} 
      returnKeyType="next"
      
      placeholder={"키를 입력해주세요."} />
      <TextInput style={styles.input} 
      returnKeyType="next"
      
      placeholder={"몸무게를 입력해주세요."} />

      <RegisterButton />
    </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
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

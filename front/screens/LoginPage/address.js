import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

import Postcode from 'react-native-daum-postcode';
const ChangeAddress = ({ navigation }) => {
  const [postcode, setPostcode] = useState("");
  const [addr, setAddr] = useState('');
  const [extraAddr, setExtraAddr] = useState('');

  return (
    <View style={{ flex: 1, margin: 100, alignItems: 'center', justifyContent: 'center' }}>
  
      <Postcode
        style={{ width: 400, height: 200 }}
        jsOptions={{ animated: true }}
        onSelected={(data) => {
          setAddr('');
          setExtraAddr('');
          setPostcode(data.zonecode);
          if (data.userSelectedType === 'R') {
            // 사용자가 도로명 주소를 선택했을 경우
            setAddr(data.roadAddress);

            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
              setExtraAddr(data.bname);
              // 건물명이 있고, 공동주택일 경우 추가한다.

              if (data.buildingName !== '' && data.apartment === 'Y') {
                setExtraAddr((prev) => {
                  return prev !== '' ? `${prev}, ${data.buildingName}` : `${data.buildingName}`;
                });
              }
            } else {
              setExtraAddr('');
            }
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            setExtraAddr(data.jibunAddress);
          }
        }}
      />
      {/*<Text>우편번호:{postcode}</Text>
      <Text>
        도로명/지번 :{addr} ({extraAddr}) 
      </Text>*/}
      <Button title="확인" onPress={() =>
            navigation.navigate("Register", {
              userAddr : addr,
            })}></Button>
    </View>
  );
};
export default ChangeAddress;
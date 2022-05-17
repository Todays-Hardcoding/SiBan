import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { SafeAreaView, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const windowWidth = Dimensions.get("window").width;

const QNA = () => {
  const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: '이용 문의', value: '이용 문의'},
      {label: '이벤트 문의', value: '이벤트 문의'},
      {label: '오류 신고', value: '오류 신고'},
      {label: '기타 문의', value: '기타 문의'}
    ]);

  return (
        <View style={styles.container}>
          {/* dropdown */}
          <DropDownPicker style={styles.category}
              placeholder="상세 분류"
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              containerStyle={{alignItems: "center"}}
              dropDownContainerStyle={{width: windowWidth*0.9}}
            />

            {/* textbox */}
            <View>
              <TextInput style={styles.input} placeholder="제목" />
              <TextInput style={styles.content} placeholder="내용을 입력해주세요." multiline={true}/>
            </View>

            {/* button */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.submit}>
                <Text style={styles.buttonText}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancel}>
                <Text style={styles.buttonText}>제출</Text>
              </TouchableOpacity>
            </View>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20
  },
  input: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    width: windowWidth*0.9,
    padding: 10,
    borderRadius: 8,
    fontSize: 15
  },
  category: {
    width: windowWidth*0.9,
    alignItems: "center",
  },
  content: {
    height: 400,
    marginTop: 12,
    borderWidth: 1,
    width: windowWidth*0.9,
    padding: 10,
    borderRadius: 8,
    textAlignVertical: "top",
    flexShrink: 1,
    fontSize: 15
  },
  submit: {
    width: 120,
    height: 40,
    backgroundColor: "#F2C9E1",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    borderRadius: 8
  },
  cancel: {
    width: 120,
    height: 40,
    backgroundColor: "#B1BCE6",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    borderRadius: 8
  },
  buttonText: {
    fontSize: 17
  },
  buttonContainer: {
    flexDirection: "row"
  }
});

export default QNA;
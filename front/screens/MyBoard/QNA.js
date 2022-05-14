import React, { useEffect, useState } from "react";
import {

  Text,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const QNA = (props) => {
  const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: '이용 문의', value: '이용 문의'},
      {label: '이벤트 문의', value: '이벤트 문의'},
      {label: '오류 신고', value: '오류 신고'},
      {label: '기타 문의', value: '기타 문의'}
    ]);

  return (
        <View>
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
              <TextInput style={styles.input} placeholder="제목" />
              <TextInput style={styles.input} placeholder="제목" />
            </View>
        </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default QNA;
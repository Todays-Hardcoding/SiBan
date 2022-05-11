import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log(windowWidth);

function onPressBtn() {
  alert("버튼이당");
}

const ChangePhoto = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerPage}>

        <TouchableOpacity onPress={onPressBtn} style={styles.image}>
          <Image source={require('../../assets/profile.png')} style={styles.image}></Image>
        </TouchableOpacity>


        <TouchableOpacity onPress={onPressBtn} style={styles.userProfile}>
          <Text style={styles.userProfileText}>사진선택</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressBtn} style={styles.userProfile}>
          <Text style={styles.userProfileText}>저장</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressBtn} style={styles.userProfile}>
          <Text style={styles.userProfileText}>뒤로</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}
export default ChangePhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECB390",
  },
  innerPage: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    marginVertical: windowHeight * 0.06,
    marginHorizontal: windowWidth * 0.05,
    borderRadius: 15,

    alignItems: "center",
  },



  image: {
    flex: 1,
    borderRadius: (windowWidth * 0.4) / 2,
    width: windowWidth * 0.4,
    height: windowHeight * 0.4,
  },

  userProfile: {
    flex: 0.4,
    backgroundColor: "#F5EEDC",
    height: windowWidth * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    borderRadius: windowWidth * 0.1
  },

  userProfileText: {
    marginHorizontal: 60,
  },

})

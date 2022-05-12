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
        <View style={styles.imagePart}>
          <TouchableOpacity onPress={onPressBtn} style={styles.image}>
            <Image source={require('../../assets/profile.png')} style={styles.imageItself}></Image>
          </TouchableOpacity>


          <TouchableOpacity onPress={onPressBtn} style={styles.chooseBtn}>
            <Text style={styles.userProfileText}>사진선택</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.buttonPart}>
          <TouchableOpacity onPress={onPressBtn} style={styles.defaultButton}>
            <Text style={styles.userProfileText}>저장</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressBtn} style={styles.defaultButton}>
            <Text style={styles.userProfileText}>뒤로</Text>
          </TouchableOpacity>
        </View>


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
    justifyContent: "space-between",
    marginVertical: windowHeight * 0.06,
    marginHorizontal: windowWidth * 0.05,
    borderRadius: 15,
    alignItems: "center",
    alignContent: 'space-around',

  },
  imagePart: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPart: {
    flex: 1,
    flexDirection: "row",
  },

  chooseBtn: {
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#C0D8C0",
    width: windowWidth * 0.3,
    height: windowHeight * 0.03,
    marginBottom: 20,
    borderRadius: 10,
  },
  btnText: {
    fontSize: windowWidth * 0.05,
  },
  image: {
    flex: 0.6,
    marginBottom: 15,
  },
  imageItself: {
    flex: 1,
    width: windowWidth * 0.6,
    borderRadius: (windowWidth * 0.6) / 2,
  },
  defaultButton: {
    backgroundColor: "#F5EEDC",
    height: windowWidth * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.04,
    marginHorizontal: 5,
  },

  userProfileText: {
    marginHorizontal: 60,
  },

})

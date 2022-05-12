<<<<<<< HEAD
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const LoginButton = () => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor:"black",
          padding : 10,
          margin:10,
          borderRadius:5,
          paddingHorizontal: 50,
          width:330,
          alignItems:'center'
          }} >
        <Text style={{fontSize:18,color:"white"}}>로그인하기</Text>
      </TouchableOpacity>

    );
  };


=======
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const LoginButton = () => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor:"black",
          padding : 10,
          margin:10,
          borderRadius:5,
          paddingHorizontal: 50,
          width:330,
          alignItems:'center'
          }} >
        <Text style={{fontSize:18,color:"white"}}>로그인하기</Text>
      </TouchableOpacity>

    );
  };


>>>>>>> 27ac23f7f36fa7039e41625177f51ee960941538
  export default LoginButton;
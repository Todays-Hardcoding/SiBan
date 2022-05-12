<<<<<<< HEAD
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const RegisterButton = () => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor:"black",
          padding : 10,
          margin:10,
          borderRadius:10,
          width:100,
          alignItems:'center'
          }}
          onPress={() => alert("가입됐다~")}  >
         
        <Text style={{fontSize:18,color:"white"}}>가입</Text>

      </TouchableOpacity>
    );
  };
=======
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const RegisterButton = () => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor:"black",
          padding : 10,
          margin:10,
          borderRadius:10,
          width:100,
          alignItems:'center'
          }}
          onPress={() => alert("가입됐다~")}  >
         
        <Text style={{fontSize:18,color:"white"}}>가입</Text>

      </TouchableOpacity>
    );
  };
>>>>>>> 27ac23f7f36fa7039e41625177f51ee960941538
  export default RegisterButton;
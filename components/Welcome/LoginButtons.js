import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Divider from 'react-native-divider';

const LoginGoogle = ({ navigation }) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", backgroundColor: "white", borderRadius: 50, marginLeft: 20, marginRight: 20, marginTop: 130, height: 60 }}>
        <Image source={{ uri: "https://img.icons8.com/color/344/google-logo.png" }} style={{ width: 30, height: 30, marginTop: 20, marginBottom: 20, right: 10, bottom: 4 }} />
        <Text style={{ color: "black", fontSize: 18, fontWeight: "900", marginTop: 20, marginBottom: 17 }}>Continue with Google</Text>
      </TouchableOpacity>


      <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", backgroundColor: "white", borderRadius: 50, marginLeft: 20, marginRight: 20, marginTop: 10, height: 60 }}>
        <Image source={require('../../assets/icons/apple.png')} style={{ width: 30, height: 30, marginTop: 20, marginBottom: 20, right: 10, bottom: 4 }} />
        <Text style={{ color: "black", fontSize: 18, fontWeight: "900", marginTop: 20, marginBottom: 17 }}>Continue with Apple</Text>
      </TouchableOpacity>

      <View style={{ marginRight: 20, marginLeft: 20 }}>
        <Divider borderColor="#fff" color="#fff" orientation="center">
          Or
        </Divider>
      </View>

      <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", backgroundColor: "#2c8eef", borderRadius: 50, marginLeft: 20, marginRight: 20, height: 60 }} onPress={() => navigation.push("SignupScreen")}>
        <Text style={{ color: "white", marginTop: 18, marginBottom: 20, fontSize: 18, fontWeight: "900" }}>Create account</Text>
      </TouchableOpacity>

      <View style={{ marginRight: 25, marginLeft: 25, marginTop: 20 }}>
        <Text style={{ color: "gray" }}>By signing up, you agree to our <Text style={{ color: "#2c8eef" }}>Terms, Privacy Policy,</Text> and <Text style={{ color: "#2c8eef" }}>Cookie Use.</Text></Text>
      </View>

      <View style={{ marginRight: 25, marginLeft: 25, marginTop: 30 }}>
        <Text style={{ color: "gray", fontSize: 15.5 }}>Have an account already? <Text style={{ color: "#2c8eef" }} onPress={() => navigation.push("LoginScreen")}>Log in</Text></Text>
      </View>
    </View>
  );
};

export default LoginGoogle;

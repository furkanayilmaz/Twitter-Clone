import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native"
import { Divider } from 'react-native-elements';
import { auth, signOut } from '../../firebase'

function Header() {

  function handleSignout() {
    signOut(auth).then(() => {
      console.log("Login Success!");
    }).catch((error) => {
      Alert.alert(
        'Logout Error!',
        error.message,
        [
          {
            text: "OK",
            onPress: () => console.log("OK"),
            style: "cancel"
          },
        ]
      )
    })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleSignout()}>
        <View>
          <Image source={{ uri: "https://avatars.githubusercontent.com/u/46174893?v=4" }} style={styles.profilePicture} />
        </View>
      </TouchableOpacity>


      <TouchableOpacity>
        <View>
          <Image source={{ uri: "https://img.icons8.com/color/344/fff/twitter--v1.png" }} style={styles.twitterIcon} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View>
          <Image source={require('../../assets/header_topright.png')} style={styles.featureIcon} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  profilePicture: {
    borderRadius: 50,
    width: 40,
    height: 40
  },
  twitterIcon: {
    width: 40,
    height: 40
  },
  featureIcon: {
    width: 30,
    height: 30,
    backgroundColor: "#15212c"
  }
})

export default Header;  
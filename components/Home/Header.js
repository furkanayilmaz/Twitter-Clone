import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native"
import { Divider } from 'react-native-elements';
import { auth, signOut } from '../../firebase'
import { getDatabase, ref, onValue } from "../../firebase"

function Header() {
  const [profilePic, setProfilePic] = React.useState('');

  React.useEffect(() => {
    getProfilePicture();
  }, [])

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

  function getProfilePicture() {
    const db = getDatabase();
    const userId = auth.currentUser.uid;
    const userRef = ref(db, "users/" + userId);
    onValue(userRef, (data) => {
      if (data.val()) {
        setProfilePic(data.val().profile_picture);
        return data.val().profile_picture;
      }
    })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleSignout()}>
        <View>
          <Image source={{ uri: profilePic }} style={styles.profilePicture} />
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
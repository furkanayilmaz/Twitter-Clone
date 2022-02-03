import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { getDatabase, ref, set, onValue } from '../../firebase';
import { auth } from "../../firebase";
import uuid from 'react-native-uuid';


const TweetInput = ({ navigation }) => {
    const [tweet, setTweet] = useState('');
    const [attachmentUrl, setAttachmentUrl] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [name, setName] = useState('');

    React.useEffect(() => {
        getProfilePicture();
        getName();
    }, [])


    const submitTweet = async (tweetPara, attachmentPara) => {
        const db = getDatabase();
        await set(ref(db, 'posts/' + uuid.v4()), {
            tweet: tweetPara,
            attachment: attachmentPara,
            postFrom: auth.currentUser.uid,
            picture: profilePic,
            name: name
        }).then(function (response) {
            console.log(response);
            navigation.goBack()
        }).catch(function (err) {
            Alert.alert(err);

            throw err;
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

    function getName() {
        const db = getDatabase();
        const userId = auth.currentUser.uid;
        const userRef = ref(db, "users/" + userId);
        onValue(userRef, (data) => {
            if (data.val()) {
                setName(data.val().name);
                return data.val().name;
            }
        })
    }

    return (
        <View>

            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ color: "white", fontSize: 17 }}>Cancel</Text>
                </TouchableOpacity>


                <View style={{ bottom: 10, backgroundColor: "#2c8eef", borderRadius: 50, width: 80, }}>
                    <Button title='Tweet' color="#fff" disabled={tweet.length > 0 && attachmentUrl.length > 0 ? false : true} onPress={() => submitTweet(tweet, attachmentUrl)} />
                </View>
            </View>



            <View style={{ flexDirection: "row", bottom: 20 }}>
                <Image source={{ uri: profilePic }} style={{ width: 40, height: 40, borderRadius: 50, marginLeft: 20 }} />
                <TextInput placeholder="What's happening?" placeholderTextColor="gray" style={{ color: "white", fontSize: 20, marginLeft: 10, width: 300, height: 300 }} multiline={true} maxLength={280} spellCheck={true} keyboardType='twitter' onChangeText={(tweetInput) => setTweet(tweetInput)} value={tweet} />

                <TextInput placeholder="Add Image URL" placeholderTextColor="gray" style={{ color: "white", fontSize: 20, width: 300, height: 300, right: 350, top: 300 }} keyboardType='url' onChangeText={(url) => setAttachmentUrl(url)} value={attachmentUrl} autoCorrect={false}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
    },
    button: {
        backgroundColor: "#2c8eef"
    }
})

export default TweetInput;

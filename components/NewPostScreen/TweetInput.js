import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import React, { useState, createContext } from 'react';
import { getDatabase, ref, set } from '../../firebase';
import HeaderPostScreen from './HeaderPostScreen';

export const tweetContext = createContext();
export const Attachment = createContext();

const TweetInput = () => {
    const [tweet, setTweet] = useState('');
    const [profilePic, setProfilePic] = useState('');

    return (
        <View style={{ flexDirection: "row", bottom: 20 }}>
            <Image source={{ uri: "https://pbs.twimg.com/profile_images/1212876693653749761/24JwKLBD_200x200.jpg" }} style={{ width: 40, height: 40, borderRadius: 50, marginLeft: 20 }} />
            <TextInput placeholder="What's happening?" placeholderTextColor="gray" style={{ color: "white", fontSize: 20, marginLeft: 10, width: 300, height: 300 }} multiline={true} maxLength={280} spellCheck={true} keyboardType='twitter' onChangeText={(tweetInput) => setTweet(tweetInput)} value={tweet} />

            <TextInput placeholder="Add Image URL" placeholderTextColor="gray" style={{ color: "white", fontSize: 20, width: 300, height: 300, right: 350, top: 300 }} keyboardType='url' onChangeText={(url) => setProfilePic(url)} value={profilePic} />

            <tweetContext.Provider value={tweet}>
                <Attachment.Provider value={profilePic}>

                    <HeaderPostScreen />
                    
                </Attachment.Provider>
            </tweetContext.Provider>
        </View>
    );
};

export default TweetInput;

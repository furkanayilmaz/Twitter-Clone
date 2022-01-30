import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import React from 'react';

const TweetInput = () => {
    return (
        <View style={{ flexDirection: "row", bottom: 20}}>
            <Image source={{ uri: "https://pbs.twimg.com/profile_images/1212876693653749761/24JwKLBD_200x200.jpg"}} style={{ width: 40, height: 40, borderRadius: 50, marginLeft: 20}}/>
            <TextInput placeholder="What's happening?" placeholderTextColor="gray" style={{ color: "white", fontSize: 20, marginLeft: 10 }} multiline={true} maxLength={280} spellCheck={true} keyboardType='twitter'/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default TweetInput;

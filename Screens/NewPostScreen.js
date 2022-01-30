import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import HeaderPostScreen from '../components/NewPostScreen/HeaderPostScreen';
import TweetInput from '../components/NewPostScreen/TweetInput';

const NewPostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <HeaderPostScreen />

        <TweetInput />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#15212c",
        flex: 1
    }
})

export default NewPostScreen;

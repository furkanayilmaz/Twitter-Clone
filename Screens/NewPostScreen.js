import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import HeaderPostScreen from '../components/NewPostScreen/HeaderPostScreen';
import TweetInput from '../components/NewPostScreen/TweetInput';

const NewPostScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderPostScreen navigation={navigation}/>

      <TweetInput navigation={navigation}/>
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

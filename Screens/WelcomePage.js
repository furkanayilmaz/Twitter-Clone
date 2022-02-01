import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import WelcomeHeader from '../components/Welcome/WelcomeHeader';
import WelcomeMessage from '../components/Welcome/WelcomeMessage';
import LoginButtons from '../components/Welcome/LoginButtons';

const WelcomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeHeader />

      <WelcomeMessage />

      <LoginButtons navigation={navigation}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#15212c",
    flex: 1
  }
});

export default WelcomePage;
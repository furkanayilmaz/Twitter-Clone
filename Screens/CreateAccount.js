import { SafeAreaView } from 'react-native';
import React from 'react';
import RegisterHeader from '../components/Register/RegisterHeader';
import RegisterForm from '../components/Register/RegisterForm';


const CreateAccount = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#15212c", flex: 1 }}>
      <RegisterHeader navigation={navigation} />

      <RegisterForm />
    </SafeAreaView>
  );
};

export default CreateAccount;

import { SafeAreaView } from 'react-native';
import React from 'react';
import RegisterHeader from '../components/Register/RegisterHeader';
import LoginForm from '../components/Login/LoginForm';

const Login = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: "#15212c", flex: 1 }}>
            <RegisterHeader navigation={navigation}/>

            <LoginForm />
        </SafeAreaView>
    );
};

export default Login;
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signInUser = (emailLogin, passwordLogin) => {
        signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
            .then((res) => console.log("Logged in!"))
            .catch((error) => {
                Alert.alert(
                    'Auth Error',
                    error.message,
                    [
                        {
                            text: "OK",
                            onPress: () => console.log("OK"),
                            style: "cancel"
                        },
                        { text: 'Sign Up', onPress: () => navigation.push('SignupScreen') },
                    ]
                )
            })
    }

    return (
        <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text style={{ color: "white", fontWeight: "900", fontSize: 22, marginTop: 15 }}>Login to your account</Text>
            </View>

            <View>

                <TextInput style={styles.inputName} placeholder='Email' placeholderTextColor="gray" keyboardType='default' onChangeText={(email) => setEmail(email)} value={email} autoCapitalize={false} />

                <TextInput style={styles.inputName} placeholder='Password' placeholderTextColor="gray" secureTextEntry={true} onChangeText={(password) => setPassword(password)} value={password} autoCapitalize={false} />
            </View>

            <View style={styles.buttonWrapper}>
                <View style={styles.button}>
                    <Button onPress={() => signInUser(email, password)} title='Log in' color="#fff" disabled={email.length > 0 && password.length > 0 ? false : true} />
                </View>
            </View>

            <View style={styles.text}>
                <Text style={{ color: "#2c8eef", fontWeight: "600" }}>Forgot password?</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputName: {
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        color: "#2c8eef",
        fontSize: 15,
        height: 40,
    },
    button: {
        backgroundColor: "#2c8eef",
        borderRadius: 50,
        width: 350,
        height: 40,
    },
    buttonWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 100
    },
    text: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20
    }
});

export default LoginForm;
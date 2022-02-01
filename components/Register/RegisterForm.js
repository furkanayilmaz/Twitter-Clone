import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { auth, createUserWithEmailAndPassword, getDatabase, ref, set } from '../../firebase';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [randomPic, setRandomPic] = useState('');

    useEffect(() => {
        const getRandomPic = async () => {
            const response = await fetch('https://randomuser.me/api/')
            const data = await response.json()
            return data.results[0].picture.large;
        }


        getRandomPic().then(pic => {
            setRandomPic(pic)
        })
    }, [])

    function handleSignup(name, email, password) {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const db = getDatabase();
            set(ref(db, "users/" + userCredential.user.uid), {
                name: name,
                email: email,
                profile_picture: randomPic
            });
        }).catch((error) => {
            Alert.alert(
                'Account Creation Error',
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
                <Text style={{ color: "white", fontWeight: "900", fontSize: 22, marginTop: 15 }}>Create your account</Text>
            </View>

            <View>
                <TextInput style={styles.inputName} placeholder='Name' placeholderTextColor="gray" onChangeText={(name) => setName(name)} value={name} />

                <TextInput style={styles.inputName} placeholder='Email' placeholderTextColor="gray" keyboardType='email-address' onChangeText={((email) => setEmail(email))} value={email} />

                <TextInput style={styles.inputName} placeholder='Password' placeholderTextColor="gray" secureTextEntry={true} onChangeText={(password) => setPassword(password)} value={password} />
            </View>

            <View style={styles.buttonWrapper}>
                <View style={styles.button}>
                    <Button title='Sign up' color="#fff" disabled={email.length > 0 && password.length > 0 && name.length > 0 ? false : true} onPress={() => handleSignup(name, email, password)} />
                </View>
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
        width: 90,
        height: 40,
    },
    buttonWrapper: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 400,
        marginRight: 20,
    }
});

export default RegisterForm;

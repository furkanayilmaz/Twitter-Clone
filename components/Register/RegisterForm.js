import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import React from 'react';

const RegisterForm = () => {
    return (
        <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text style={{ color: "white", fontWeight: "900", fontSize: 22, marginTop: 15 }}>Create your account</Text>
            </View>

            <View>
                <TextInput style={styles.inputName} placeholder='Name' placeholderTextColor="gray" />

                <TextInput style={styles.inputName} placeholder='Email' placeholderTextColor="gray" keyboardType='email-address' />

                <TextInput style={styles.inputName} placeholder='Password' placeholderTextColor="gray" secureTextEntry={true} />
            </View>

            <View style={styles.buttonWrapper}>
                <View style={styles.button}>
                    <Button title='Sign up' color="#fff" disabled={true} onPress={() => Alert.alert("Button Pressed")} />
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

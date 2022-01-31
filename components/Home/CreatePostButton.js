import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const CreatePostButton = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <TouchableOpacity style={{ width: 50, height: 50 }} onPress={() => navigation.push("NewPostScreen")}>
                    <Image source={{ uri: "https://img.icons8.com/android/344/ffffff/plus.png" }} style={{ right: 5, bottom: 5, width: 20, height: 20 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-end",
        zIndex: 999,
        bottom: 55,
        right: 10,
    },
    button: {
        borderRadius: 50,
        backgroundColor: "#2c8eef",
        padding: 20,
        width: 50,
        height: 50,
    }
})

export default CreatePostButton;

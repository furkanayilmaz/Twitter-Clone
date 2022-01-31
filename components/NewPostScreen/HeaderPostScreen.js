import { View, StyleSheet, TouchableOpacity, Text, Button, Alert } from 'react-native';
import React from 'react';

const HeaderPostScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: "white", fontSize: 17 }}>Cancel</Text>
            </TouchableOpacity>

            <View style={{ bottom: 10, backgroundColor: "#2c8eef", borderRadius: 50, width: 80, }}>
                <Button title='Tweet' color="#fff" onPress={() => Alert.alert("Button pressed")} disabled={true} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
    },
    button: {
        backgroundColor: "#2c8eef"
    }
})

export default HeaderPostScreen;

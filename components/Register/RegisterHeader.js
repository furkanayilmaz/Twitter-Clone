import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const RegisterHeader = ({ navigation }) => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 20 }}>
            <TouchableOpacity>
                <Text style={{ color: "#2c8eef", fontSize: 17 }} onPress={() => navigation.goBack()}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ bottom: 5 }}>
                <View>
                    <Image source={{ uri: "https://img.icons8.com/color/344/fff/twitter--v1.png" }} style={{ width: 40, height: 40 }} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={{ color: "#15212c" }}>Thissdf</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RegisterHeader;
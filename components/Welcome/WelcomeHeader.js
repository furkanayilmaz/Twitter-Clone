import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const WelcomeHeader = () => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "center", padding: 10 }}>
            <TouchableOpacity>
                <View>
                    <Image source={{ uri: "https://img.icons8.com/color/344/fff/twitter--v1.png"}}  style={{ width: 40, height: 40 }} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default WelcomeHeader;

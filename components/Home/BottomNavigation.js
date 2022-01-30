import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';


export const bottomTabIcons = [
    {
        name: 'Home',
        inactive: 'https://img.icons8.com/external-prettycons-lineal-prettycons/344/ffffff/external-bird-house-ecology-prettycons-lineal-prettycons.png',
    },
    {
        name: 'Search',
        inactive: 'https://img.icons8.com/ios/344/ffffff/search--v1.png',
    },
    {
        name: 'Spaces',
        inactive: 'https://img.icons8.com/ios/344/ffffff/deviation.png',
    },
    {
        name: 'Notification',
        inactive: 'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/344/ffffff/external-notification-multimedia-kiranshastry-lineal-kiranshastry.png',
    },
    {
        name: 'Profile',
        inactive: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/344/ffffff/external-message-contact-flatart-icons-outline-flatarticons.png',
    },
]

const BottomNavigation = () => {
    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                {bottomTabIcons.map((icon, index) => (
                    <TouchableOpacity key={index}>
                        <Image key={index} source={{ uri: icon.inactive }} style={styles.icon} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        width: '100%',
        bottom: '3%',
        zIndex: 999,
        backgroundColor: '#15212c'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
    },
    icon: {
        width: 30,
        height: 30,
    }
})


export default BottomNavigation;

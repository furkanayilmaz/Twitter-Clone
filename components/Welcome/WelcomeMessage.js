import { View, Text } from 'react-native';
import React from 'react';

const WelcomeMessage = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 150}}>
      <Text style={{ color: "white", fontSize: 30, marginLeft: 20, marginRight: 10, width: 350, fontWeight: "900"}}>See what's happening in the world right now.</Text>
    </View>
  );
};

export default WelcomeMessage;

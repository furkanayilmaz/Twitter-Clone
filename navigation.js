import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CreateAccount from './Screens/CreateAccount';
import HomePage from './Screens/HomePage';
import Login from './Screens/Login';
import NewPostScreen from './Screens/NewPostScreen';
import WelcomePage from './Screens/WelcomePage';

const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false,
}


export const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={screenOptions}>
            <Stack.Screen name='HomeScreen' component={HomePage} />
            <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export const SignedOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='WelcomePage' screenOptions={screenOptions}>
            <Stack.Screen name='WelcomePage' component={WelcomePage} />
            <Stack.Screen name='LoginScreen' component={Login} />
            <Stack.Screen name='SignupScreen' component={CreateAccount} />
        </Stack.Navigator>
    </NavigationContainer>
)
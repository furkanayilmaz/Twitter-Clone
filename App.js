import HomePage from './Screens/HomePage';
import NewPostScreen from './Screens/NewPostScreen';
import WelcomePage from './Screens/WelcomePage';
import CreateAccount from './Screens/CreateAccount';
import Login from './Screens/Login';
import { SignedInStack } from './navigation';
import { SignedOutStack } from './navigation';
import * as React from 'react';
import AuthNavigation from './AuthNavigation';

export default function App() {
  return <SignedOutStack />
}
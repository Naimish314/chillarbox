import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from '../screens/Onboarding';
import Home from '../screens/Home';
import VaultDetails from '../screens/VaultDetails';
import ApprovalScreen from '../screens/ApprovalScreen';
import TransactionLog from '../screens/TransactionLog';

// 👇 This defines your screen names and params (we’re using no params yet)
export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
  VaultDetails: undefined;
  ApprovalScreen: undefined;
  TransactionLog: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// This is the navigator that will render your screen transitions
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VaultDetails" component={VaultDetails} />
        <Stack.Screen name="ApprovalScreen" component={ApprovalScreen} />
        <Stack.Screen name="TransactionLog" component={TransactionLog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

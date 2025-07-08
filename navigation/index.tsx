// navigation/index.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from '../screens/Onboarding';
import DrawerNavigator from './DrawerNavigator';
import VaultDetails from '../screens/VaultDetails';
import ApprovalScreen from '../screens/ApprovalScreen';
import TransactionLog from '../screens/TransactionLog';
import WelcomeScreen from '../screens/WelcomeScreen'; // 08-07-2025
import ChooseVaultType from '../screens/ChooseVaultType';
import SoloVaultSetup from '../screens/SoloVaultSetup';
import GroupVaultSetup from '../screens/GroupVaultSetup';


export type RootStackParamList = {
  Welcome: undefined;
  Onboarding: undefined;
  Home: undefined;
  VaultDetails: undefined;
  ApprovalScreen: undefined;
  TransactionLog: undefined;
  ChooseVaultType: undefined;
  SoloVaultSetup: undefined;
  GroupVaultSetup: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="ChooseVaultType" component={ChooseVaultType} />
        <Stack.Screen name="SoloVaultSetup" component={SoloVaultSetup} />
        <Stack.Screen name="GroupVaultSetup" component={GroupVaultSetup} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="VaultDetails" component={VaultDetails} />
        <Stack.Screen name="ApprovalScreen" component={ApprovalScreen} />
        <Stack.Screen name="TransactionLog" component={TransactionLog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

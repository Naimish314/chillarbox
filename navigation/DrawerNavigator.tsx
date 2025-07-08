// navigation/DrawerNavigator.tsx

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import VaultDetails from '../screens/VaultDetails';
import ApprovalScreen from '../screens/ApprovalScreen';
import TransactionLog from '../screens/TransactionLog';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#0D0D2B' },
        headerTintColor: '#fff',
        drawerStyle: { backgroundColor: '#1E1E3F' },
        drawerActiveTintColor: '#45A29E',
        drawerInactiveTintColor: '#ccc',
      }}
    >
      <Drawer.Screen name="🏠 Home" component={Home} />
      <Drawer.Screen name="💰 Vault Details" component={VaultDetails} />
      <Drawer.Screen name="🗳️ Approvals" component={ApprovalScreen} />
      <Drawer.Screen name="📄 Transaction Logs" component={TransactionLog} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ChooseVaultType = ({ navigation }: any) => {
  return (
    <LinearGradient colors={['#0D0D2B', '#1f103f']} style={styles.container}>
      <Text style={styles.heading}>Choose Vault Type</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('SoloVaultSetup')}
      >
        <Text style={styles.buttonText}>Start Solo Vault</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('GroupVaultSetup')}
      >
        <Text style={styles.buttonText}>Create Group Vault</Text>
      </Pressable>
    </LinearGradient>
  );
};

export default ChooseVaultType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#0D0D2B',
  },
  heading: {
    fontSize: 26,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#45A29E',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SoloVaultSetup = ({ navigation }: any) => {
  const [vaultName, setVaultName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');

  return (
    <LinearGradient colors={['#0D0D2B', '#1f103f']} style={styles.container}>
      <Text style={styles.title}>Start Solo Vault</Text>

      <TextInput
        placeholder="Vault Name"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={vaultName}
        onChangeText={setVaultName}
      />
      <TextInput
        placeholder="Target Amount (₹)"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        style={styles.input}
        value={targetAmount}
        onChangeText={setTargetAmount}
      />

      <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Create Vault</Text>
      </Pressable>
    </LinearGradient>
  );
};

export default SoloVaultSetup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#0D0D2B',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#2D2D44',
    color: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#45A29E',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

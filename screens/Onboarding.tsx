import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ChillarBox 👋</Text>
      <Text style={styles.subtitle}>Your Squad’s Vault Begins Here 💸</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    color: '#555',
    textAlign: 'center',
  },
});

export default Onboarding;

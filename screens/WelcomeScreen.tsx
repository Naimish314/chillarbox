import React from 'react';
import { Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';

const { width } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <LinearGradient
      colors={['#000428', '#004e92']} // 💡 Brighter dark blue tones
      style={styles.gradient}
    >
      <Animatable.View animation="fadeInUp" duration={1000} style={styles.container}>

        <LottieView
          source={require('../assets/animations/crypto-wallet.json')}
          autoPlay
          loop
          style={styles.animation}
        />

        <Text style={styles.title}>ChillarBox</Text>
        <Text style={styles.subtitle}>The Squad Vault</Text>

        <Animatable.View animation="pulse" iterationCount="infinite" duration={2000}>
          <Pressable
            onPress={() => navigation.navigate('Home')}
            style={({ pressed }) => [
              styles.button,
              pressed && { transform: [{ scale: 0.95 }] },
            ]}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </Pressable>
        </Animatable.View>

      </Animatable.View>
    </LinearGradient>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  animation: {
    width: width * 0.6,
    height: width * 0.6,
    marginBottom: 30,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    letterSpacing: 1.2,
  },
  subtitle: {
    fontSize: 18,
    color: '#B0B0E0',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#45A29E',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    shadowColor: '#45A29E',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    letterSpacing: 0.8,
  },
});

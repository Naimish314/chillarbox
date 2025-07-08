import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';

const { width } = Dimensions.get('window');

const Home = ({ navigation }: any) => {
  return (
    <LinearGradient colors={['#0D0D2B', '#1f103f']} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <LottieView
            source={require('../assets/animations/wallet-animation.json')}
            autoPlay
            loop
            style={styles.headerAnimation}
          />
          <Text style={styles.title}>Welcome back, Aaliya!</Text>
        </View>

        {/* Vault Card */}
        <Animatable.View animation="slideInUp" delay={200} style={styles.vaultCard}>
          <LottieView
            source={require('../assets/animations/vault-coin-drop.json')}
            autoPlay
            loop
            style={styles.vaultAnimation}
          />
          <Text style={styles.vaultTitle}>Your Squad Vault</Text>
          <Text style={styles.vaultBalance}>Goal: Goa Trip 🌴</Text>
          <Text style={styles.vaultBalanceAmount}>₹4,850 saved</Text>
        </Animatable.View>

        {/* Create Vault Button */}
        <Animatable.View animation="fadeInUp" delay={400} style={styles.actions}>
          <Pressable
            style={styles.actionButton}
            onPress={() => navigation.navigate('ChooseVaultType')}
          >
            <Text style={styles.actionText}>Create Vault</Text>
          </Pressable>
        </Animatable.View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    padding: 20,
    paddingBottom: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerAnimation: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  vaultCard: {
    backgroundColor: '#1e1b33',
    borderRadius: 18,
    padding: 20,
    alignItems: 'center',
    marginBottom: 30,
    elevation: 4,
  },
  vaultAnimation: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  vaultTitle: {
    fontSize: 20,
    color: '#9B5DE5',
    fontWeight: '600',
    marginBottom: 6,
  },
  vaultBalance: {
    fontSize: 16,
    color: '#DADADA',
  },
  vaultBalanceAmount: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 6,
  },
  actions: {
    marginTop: 10,
  },
  actionButton: {
    backgroundColor: '#45A29E',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

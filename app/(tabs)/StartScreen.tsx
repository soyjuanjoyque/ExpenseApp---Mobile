import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const StartScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Expenses App</Text>
          <Image source={require('../../assets/images/carterass.png')} style={styles.logo} />
        </View>
      </View>
      <View style={styles.footer}>
        <Link href="/Login" asChild>
        <TouchableOpacity style={styles.buttonLogin} onPress={() => console.log('Login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        </Link>
        <Link href="/Signup" asChild>
        <TouchableOpacity style={styles.buttonSingup}>
          <Text style={styles.singUpText}>Signup</Text>
        </TouchableOpacity >
        </Link>
        <Link href="/Terms" asChild>
        <TouchableOpacity onPress={() => console.log('Terms')}>
        <Text style={styles.termsText}>Terms of service</Text>
        </TouchableOpacity >
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 1,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  buttonLogin: {
    backgroundColor: '#2fbce6',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
    shadowOpacity: 0.25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonSingup: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
    shadowOpacity: 0.25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  singUpText: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'normal',
  },
  loginText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'normal',
  },
  termsText: {
    color: '#666',
    fontSize: 12,
  }
});

export default StartScreen;

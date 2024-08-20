import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function Terms() {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    Alert.alert('Terms Accepted', 'Thank you for accepting the terms and conditions.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Terms and Conditions</Text>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.paragraph}>
          Welcome to our app. By using this application, you agree to comply with
          the following terms and conditions of use. If you do not agree with any part
          of these terms and conditions, please do not use our app.
        </Text>
        <Text style={styles.sectionTitle}>1. Use of the Application</Text>
        <Text style={styles.paragraph}>
          The content of the screens of this app is for your general information
          and use only. It is subject to change without notice.
        </Text>
        <Text style={styles.sectionTitle}>2. Data Protection</Text>
        <Text style={styles.paragraph}>
          We are committed to ensuring that your information is secure. You can read more
          about our privacy policy in the relevant section.
        </Text>
        <Text style={styles.sectionTitle}>3. Intellectual Property Rights</Text>
        <Text style={styles.paragraph}>
          All intellectual property rights for the content of the app belong to the company,
          unless otherwise stated.
        </Text>
        <Text style={styles.sectionTitle}>4. Changes to the Terms</Text>
        <Text style={styles.paragraph}>
          We reserve the right to update the terms and conditions at any time. We will notify you
          of any changes through the app.
        </Text>
      </ScrollView>

      <TouchableOpacity
        style={[styles.button, accepted ? styles.buttonDisabled : {}]}
        onPress={handleAccept}
        disabled={accepted}
      >
        <Text style={styles.buttonText}>
          {accepted ? 'Accepted' : 'Accept Terms'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  scrollView: {
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 15,
    textAlign: 'justify',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  button: {
    backgroundColor: '#2fbce6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleSignIn = () => {
    setEmailError(email === ''); // Set email error if empty
    setPasswordError(password === ''); // Set password error if empty

    if (email !== '' && password !== '') {
      // Navigate to main page or perform sign-in logic
      navigation.navigate('MainPage');
    }
  };

  return (
    <ImageBackground source={require('./assets/bg-img.jpg')} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
          <Text style={styles.doneWithIt}>DoneWithIt</Text>
          <Text style={styles.subText}>Sell what you don't need anymore</Text>
          <TextInput
            placeholder="Email Address"
            style={[styles.input, emailError && styles.errorInput]}
            value={email}
            onChangeText={text => {
              setEmail(text);
              setEmailError(false); // Remove error when user types
            }}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={[styles.input, passwordError && styles.errorInput]}
            value={password}
            onChangeText={text => {
              setPassword(text);
              setPasswordError(false); // Remove error when user types
            }}
          />
          <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.switchButton}>
            <Text style={styles.switchButtonText}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneWithIt: {
    position: 'absolute',
    top: 225,
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  subText: {
    position: 'absolute',
    top: 270, 
    fontSize: 16,
    color: 'white',
  },
  input: {
    width: '80%',
    height: '5%',
    borderRadius: 20,
    backgroundColor: 'white',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
  signInButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  switchButton: {
    marginTop: 20,
  },
  switchButtonText: {
    color: 'white',
  },
});

export default SignInScreen;

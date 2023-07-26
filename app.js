import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';

const EnterScreen = () => {
  const [code, setCode] = useState('');
  const secretCode = '1234'; // Replace '1234' with your desired secret code

  const checkCode = () => {
    if (code === secretCode) {
      alert('Enter');
    } else {
      alert('Incorrect code. Try again.');
    }
    setCode('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter the Code</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the code"
        value={code}
        onChangeText={(text) => setCode(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={checkCode}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EnterScreen;

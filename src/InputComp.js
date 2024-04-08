import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

const InputComp = () => {
  const [name, setName] = useState('');

  function onSubmit() {
    let newName = name.trim();
    setName(newName);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        placeholder={'enter your name'}
        onChangeText={name => setName(name)}
      />
      <Button
        testID="submit"
        style={styles.btn}
        onPress={onSubmit} // This line
        title="Submit"
      />
    </View>
  );
};

export default InputComp;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 24,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  input: {
    fontWeight: 'bold',
    color: 'white',
    borderWidth: 1,
    borderColor: '#333',
    width: '90%',
    padding: 10,
    marginVertical: 15,
    borderRadius: 5,
    color: 'black',
  },
  btn: {
    height: 40,
    width: '70%',
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  btnText: {
    color: 'white',
  },
});

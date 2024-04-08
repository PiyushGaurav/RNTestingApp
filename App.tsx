import React from 'react';
import {StyleSheet, View} from 'react-native';
import Welcome from './src/Welcome';
import Async from './src/Async';
import InputComp from './src/InputComp';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Welcome />
      <InputComp />
      <Async />
    </View>
  );
};

export default App;

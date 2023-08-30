/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import PhotosScreen from './src/pages/PhotosScreen';

function App() {

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <PhotosScreen />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({

});

export default App;

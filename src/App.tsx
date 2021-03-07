import React from 'react';
import {Provider} from 'react-redux';

import Router from './config/router';
import store from './config/store';

import {SafeAreaView, StatusBar, Platform} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  if (Platform.OS == 'ios') {
    return (
      <Provider store={store}>
        <SafeAreaView style={{flex: 0, backgroundColor: '#FFF'}} />
        <SafeAreaView style={{flex: 1}}>
          <StatusBar barStyle="dark-content" />
          <Router />
        </SafeAreaView>
      </Provider>
    );
  }
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

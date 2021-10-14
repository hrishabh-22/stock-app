import React from 'react';
import {NativeBaseProvider} from 'native-base';
import App from '../App';
import {Provider} from 'react-redux';
import store from './store';

const RootApp = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <App />
      </NativeBaseProvider>
    </Provider>
  );
};

export default RootApp;

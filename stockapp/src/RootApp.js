import React from 'react';
import {NativeBaseProvider} from 'native-base';
import App from '../App';

const RootApp = () => {
  return (
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  );
};

export default RootApp;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import {StatusBar} from 'react-native';
import Profile from './src/screens/Profile';
import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SignIn';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#3700B3" />
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default App;

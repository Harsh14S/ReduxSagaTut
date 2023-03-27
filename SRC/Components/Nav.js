import { StatusBar } from 'react-native'
import React from 'react';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from './Cart';
import LogInSignUp from './LogInSignUp';
import LogIn from './LogIn';
import SignUp from './SignUp';

const Stack = createNativeStackNavigator();

export default Nav = () => {
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Stack.Navigator
        initialRouteName='LogInSignUp'
        // initialRouteName='SignUp'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="LogInSignUp" component={LogInSignUp} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  )
}

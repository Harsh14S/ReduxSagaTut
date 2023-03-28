import { SafeAreaView, Text, View } from 'react-native'
import React from 'react';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from './Cart';
import LogInSignUp from './LogInSignUp';
import LogIn from './LogIn';
import SignUp from './SignUp';
import LoginDetails from './LoginDetails';
import SearchPage from './SearchPage';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Image } from 'react-native/types';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default Nav = () => {
  return (
    <Stack.Navigator
      // initialRouteName='Home'
      initialRouteName='LogInSignUp'
      // initialRouteName='SignUp'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="LogInSignUp" component={LogInSignUp} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="DrawerNav" component={DrawerNav} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="SearchProduct" component={SearchPage} />
      <Stack.Screen name="LoginDetails" component={LoginDetails} />
    </Stack.Navigator>
  )
}
const DrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => (
        <SafeAreaView>
          <Text>Hello</Text>
        </SafeAreaView>
      )}
      screenOptions={{
        headerShown: false,
        drawerItemStyle: {
          padding: RFPercentage(1),
        }
      }}
    >
      <Drawer.Screen name="Home" component={Home}
        options={{
          // drawerIcon: {},
          // drawerLabel: ({ focused, })
        }}
      />
    </Drawer.Navigator>
  )
}

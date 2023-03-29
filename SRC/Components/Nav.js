import { SafeAreaView, Text, View } from 'react-native'
import React from 'react';
import Home from './Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from './Cart';
import LogInSignUp from './LogInSignUp';
import LogIn from './LogIn';
import SignUp from './SignUp';
import LoginDetails from './LoginDetails';
import SearchPage from './SearchPage';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { RFPercentage } from 'react-native-responsive-fontsize';
import DrawerComponent from './DrawerComponent';
import Profile from './Profile';
import Settings from './Settings';
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default Nav = () => {
  const UserProfileData = useSelector(state => state.GetUserProfile);
  const LogInData = useSelector(state => state.LogIn);
  const SignUpData = useSelector(state => state.SignUp);
  // console.log("LogInData: ", LogInData);
  return (
    <Stack.Navigator
      // initialRouteName='Home'
      initialRouteName='LogInSignUp'
      // initialRouteName='SignUp'
      screenOptions={{
        headerShown: false,
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
      initialRouteName='Home'
      defaultStatus='open'
      drawerContent={(props) => <DrawerComponent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerItemStyle: {
          padding: RFPercentage(1),
        },
        drawerHideStatusBarOnOpen: false
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  )
}

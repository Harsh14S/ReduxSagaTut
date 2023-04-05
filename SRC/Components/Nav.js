import React, { useState } from 'react';
import Home from './Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from './Cart';
import LogInSignUp from './LogInSignUp';
import LogIn from './LogIn';
import SignUp from './SignUp';
import LoginDetails from './LoginDetails';
import SearchPage from './SearchPage';
import { createDrawerNavigator, DrawerItem, useDrawerStatus } from '@react-navigation/drawer';
import { RFPercentage } from 'react-native-responsive-fontsize';
import DrawerComponent from './DrawerComponent';
import Profile from './Profile';
import Settings from './Settings';
import { useSelector } from 'react-redux';
import PermissionsPage from './PermissionsPage';
import Camera from './Media/Camera';
import Media from './Media/Audio';
import Audio from './Media/Audio';
import MediaDrawerComponent from './MediaDrawerComponent';
import Video from './Media/Video';
import MusicPlayer from './Media/MusicPlayer';
import VideoPlayer from './Media/VideoPlayer';
import Location from './Media/Location';
import UserFeedback from './UserFeedback';
import Registration from './Registration';
import SplashScreen from './SplashScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default Nav = () => {
  return (
    <Stack.Navigator
      // initialRouteName='Home'
      initialRouteName='SplashScreen'
      // initialRouteName='PermissionsPage'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LogInSignUp" component={LogInSignUp} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="LoginDetails" component={LoginDetails} />
      <Stack.Screen name="DrawerNav" component={DrawerNav} />
      <Stack.Screen name="MediaDrawerNav" component={MediaDrawerNav} />
      <Stack.Screen name="UserFeedback" component={UserFeedback} />
      <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
    </Stack.Navigator>
  )
}
const DrawerNav = ({ route }) => {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      defaultStatus='open'
      drawerContent={(props) => <DrawerComponent {...props} route={route} />}
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
      <Drawer.Screen name="PermissionsPage" component={PermissionsPage} />
      <Stack.Screen name="SearchProduct" component={SearchPage} />
    </Drawer.Navigator>
  )
}
const MediaDrawerNav = ({ route }) => {
  return (
    <Drawer.Navigator
      initialRouteName='Audio'
      defaultStatus='open'
      drawerContent={(props) => <MediaDrawerComponent {...props} route={route} />}
      screenOptions={{
        headerShown: false,
        drawerItemStyle: {
          padding: RFPercentage(1),
        },
        drawerHideStatusBarOnOpen: false
      }}
    >
      <Drawer.Screen name="Audio" component={Audio} />
      <Drawer.Screen name="Location" component={Location} />
      <Drawer.Screen name="Video" component={Video} />
      <Drawer.Screen name="Camera" component={Camera} />
    </Drawer.Navigator>
  )
}

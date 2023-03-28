import { StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import Store from './SRC/Redux/Store'
import Nav from './SRC/Components/Nav'
import { NavigationContainer } from '@react-navigation/native'


const App = () => {
  return (
    <Provider store={Store}>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Nav />
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})

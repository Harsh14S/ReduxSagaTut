import { StyleSheet } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import Store from './SRC/Redux/Store'
import Nav from './SRC/Components/Nav'


const App = () => {
  return (
    <Provider store={Store}>
      <Nav />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})

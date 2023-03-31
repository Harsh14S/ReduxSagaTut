import { StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import Store from './SRC/Redux/Store'
import Nav from './SRC/Components/Nav'
import { NavigationContainer } from '@react-navigation/native'
import Colors from './SRC/Common/Colors'


const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={Colors.transparent} />
      <Provider store={Store}>
        <StatusBar barStyle={'light-content'} />
        <NavigationContainer>
          <Nav />
        </NavigationContainer>
      </Provider>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Common/Colors'

export default Settings = () => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.silver_90,
  }
})

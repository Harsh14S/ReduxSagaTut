import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Common/Colors'

export default Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.arsenic_88,
  }
})

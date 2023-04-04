import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Common/Colors'
import { CommonStyles } from '../Common/Style'
import UserFeedbackHeader from './UserFeedbackHeader'

export default UserFeedback = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <UserFeedbackHeader navigation={navigation} />
      <Text>UserFeedback</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: CommonStyles.paddingTop.paddingTop,
  }
})

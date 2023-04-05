import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'

export default FuncChild = () => {
  useEffect(() => {

  })
  return (
    <View style={{ marginTop: RFPercentage(2) }}>
      <Text style={{ fontSize: RFPercentage(2), marginTop: RFPercentage(2) }}>FuncChild Component</Text>
    </View>
  )
}

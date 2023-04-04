import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Colors from '../../Common/Colors'

export default Button = ({ title, onPress = () => { } }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress} >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    height: RFPercentage(6),
    width: '100%',
    backgroundColor: Colors.midnightBlue_80,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: RFPercentage(1),
  },
  btnText: {
    fontSize: RFPercentage(3),
    color: Colors.white,
    fontWeight: '700'
    // marginVertical: RFPercentage(1),
  }
})

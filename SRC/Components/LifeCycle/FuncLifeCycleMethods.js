import React, { Component, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import LCBtn from './LCBtn';
import Button from '../SubComponents/Button';
import Colors from '../../Common/Colors';
import FuncChild from './FuncChild';

export default FuncLifeCycleMethods = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Current Component Mounted: Constructor() ");
  })
  useEffect(() => {
    console.log("UseEffect Mounted: with emtpy array as dependency ");
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: RFPercentage(2) }}>Counter: {count}</Text>
      <Text style={{ fontSize: RFPercentage(2), marginTop: RFPercentage(2), backgroundColor: Colors.lightGrey, padding: RFPercentage(1) }} onPress={() => {
        setCount(count + 1)
      }}>Click Here</Text>
      {count < 5 ? <FuncChild /> : null}
    </View>
  )
}

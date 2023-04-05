import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

export default class LCBtn extends Component {
  componentDidMount() {
    console.log("LCBtn Mounted");
  }
  componentWillUnmount() {
    console.log("LCBtn Unmounted");
  }
  render() {
    return (
      <View style={{ marginTop: RFPercentage(2) }}>
        <Text style={{ fontSize: RFPercentage(2), marginTop: RFPercentage(2) }}>LCBtn Component</Text>
      </View>
    )
  }
}

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import LCBtn from './LCBtn';
import Button from '../SubComponents/Button';

export default class LifeCycleMethods extends Component {
  constructor() {
    super();
    console.log("Constructor()");
    this.state = {
      counter: 0,
    }
  }
  componentDidMount() {
    console.log("Main Component mounted");
  }
  componentDidUpdate() {
    console.log(" Main Component updated");
  }

  render() {
    console.log("Render()");
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: RFPercentage(2) }}>Text Component {this.state.counter}</Text>
        <Text style={{ fontSize: RFPercentage(2), marginTop: RFPercentage(2) }} onPress={() => {
          this.setState({ counter: this.state.counter + 1 })
        }}>Click Here</Text>
        {this.state.counter < 3 ? <LCBtn /> : null}
      </View>
    )
  }
}


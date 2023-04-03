import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CommonStyles } from '../../Common/Style'
import { RFPercentage } from 'react-native-responsive-fontsize'
import GetLocation from 'react-native-get-location'

export default Location = () => {
  const [location, setLocation] = useState(null);

  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 5000,
  }).then(location => {
    setLocation(location)
    console.log(location);
  }).catch(error => {
    const { code, message } = error;
    console.warn("Error Code: ", code, " Error Message: ", message);
  })

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Location</Text>
      {location === null ? null : (
        <View>
          <Text>Accuracy: {location.accuracy}</Text>
          <Text>Altitude: {location.altitude}</Text>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Provider: {location.provider}</Text>
          <Text>Speed: {location.speed}</Text>
          <Text>Time: {location.time}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: CommonStyles.paddingTop.paddingTop,
    alignItems: 'center',

  },
  heading: {
    fontSize: RFPercentage(3),
    fontWeight: '700',
    marginBottom: RFPercentage(1)
  },
})

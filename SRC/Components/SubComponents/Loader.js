import { ActivityIndicator, Dimensions, Platform, StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import Colors from '../../Common/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';

const { height, width } = Dimensions.get('screen')
const isIos = (Platform.OS === 'ios');

export default Loader = ({ visible }) => {
  const { height, width } = useWindowDimensions();
  return visible && <View style={styles.container}>
    <View style={styles.loader}>
      <ActivityIndicator size={isIos ? 'large' : RFPercentage(7)} color={Colors.midnightBlue_80} />
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    height: isIos ? height : height + StatusBar.currentHeight,
    width,
    position: 'absolute',
    zIndex: 1,  // to give the priority
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    backgroundColor: Colors.white,
    padding: RFPercentage(2),
    borderRadius: RFPercentage(2)
  }
})

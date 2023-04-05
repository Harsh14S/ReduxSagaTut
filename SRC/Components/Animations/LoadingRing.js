import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../Common/Colors';
import {MotiView} from 'moti';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {Easing} from 'react-native-reanimated';

export default LoadingRing = () => {
  return (
    // <View style={styles.container}>
    <MotiView
      style={styles.ring}
      from={{
        height: RFPercentage(7.5),
        width: RFPercentage(7.5),
        borderRadius: RFPercentage(100),
        borderColor: Colors.white,
        borderWidth: RFPercentage(1),
      }}
      animate={{
        height: RFPercentage(10),
        width: RFPercentage(10),
        borderRadius: RFPercentage(100),
        borderColor: Colors.white,
        borderWidth: RFPercentage(1),
      }}
      transition={{
        type: 'timing',
        duration: 750,
        easing: Easing.out(Easing.ease),
        // delay: 500,
        loop: true,
      }}
    />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.white,
    flex: 1,
  },
  ring: {
    // flex: 1,
    height: RFPercentage(7),
    width: RFPercentage(7),
    borderRadius: RFPercentage(100),
    borderColor: Colors.white,
    borderWidth: RFPercentage(0.6),
    elevation: 0,
    // shadowRadius: 2,
    shadowColor: Colors.white,
    // backgroundColor: Colors.black,
  },
});

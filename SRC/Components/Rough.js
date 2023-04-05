import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../Common/Colors';
import LoadingRing from './Animations/LoadingRing';

export default Rough = () => {
  return (
    <View style={styles.container}>
      <LoadingRing />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
  },
});

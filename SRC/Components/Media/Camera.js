import { Image, Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../Common/Colors';
import { IconUri } from '../../Common/Links';
import { CommonStyles } from '../../Common/Style';


export default Camera = () => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.btn}
        onPress={() => { }}>
        <Image source={IconUri.CameraIcon} style={styles.cameraBtn} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: CommonStyles.paddingTop.paddingTop,
  },
  cameraPreview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  btn: {
    backgroundColor: Colors.midnightBlue_80,
    // width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFPercentage(5),
    borderRadius: RFPercentage(100),
    // marginVertical: RFPercentage(1),
  },
  cameraBtn: {
    height: RFPercentage(10),
    width: RFPercentage(10),
    tintColor: Colors.white
  },
  btnTxt: {
    color: Colors.white,
    fontSize: RFPercentage(2),
    fontWeight: '700',
  },
})

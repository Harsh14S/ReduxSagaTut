import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../Common/Colors'
import { CommonStyles } from '../../Common/Style'
import { IconUri, ImageLinks } from '../../Common/Links'
import { RFPercentage } from 'react-native-responsive-fontsize'

const width = Dimensions.get('screen').width;

export default MusicPlayer = () => {
  return (
    <View style={styles.container}>
      <Image source={ImageLinks.MusicBackground} style={styles.musicImage} />
      <View style={styles.actionButtonContainer}>
        <Pressable style={styles.actionBtn}>
          <Image style={styles.actionIcon} source={IconUri.PauseIcon} />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: CommonStyles.paddingTop.paddingTop,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  musicImage: {
    height: RFPercentage(75),
    width: width,
  },
  actionBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionIcon: {
    height: RFPercentage(5),
    width: RFPercentage(5),
    // backgroundColor: Colors.silver_90
  }
})

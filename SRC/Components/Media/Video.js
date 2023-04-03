import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../Common/Colors'
import DeviceInfo from 'react-native-device-info'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { CommonStyles } from '../../Common/Style'
import { VideoLink } from '../../Common/Links'
// import Video from 'react-native-video';



export default Video = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <VideoHeader />
      <View style={styles.videoLinks}>
        <Pressable style={styles.btn} onPress={
          () => {
            navigation.navigate('VideoPlayer', {
              external: true,
              videoURL: VideoLink.ExternalVideo,
            })
          }
        }>
          <Text style={styles.btnTxt}>External Video</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={
          () => {
            navigation.navigate('VideoPlayer', {
              external: false,
              videoURL: VideoLink.InternalVideo1,
            })
          }
        }>
          <Text style={styles.btnTxt}>Internal Video 01</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={
          () => {
            navigation.navigate('VideoPlayer', {
              external: false,
              videoURL: VideoLink.InternalVideo2,
            })
          }
        }>
          <Text style={styles.btnTxt}>Internal Video 02</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: CommonStyles.paddingTop.paddingTop,
  },
  videoLinks: {
    flex: 1,
    paddingTop: RFPercentage(3),
    backgroundColor: Colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: Colors.midnightBlue_80,
    paddingVertical: RFPercentage(1.5),
    width: RFPercentage(35),
    borderRadius: RFPercentage(1),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RFPercentage(1.5),
  },
  btnTxt: {
    fontSize: RFPercentage(2.5),
    color: Colors.white,
  },
})

const VideoHeader = () => {
  return (
    <View style={videoHeaderStyles.container}>
      <Text style={videoHeaderStyles.headerText}>Video</Text>
    </View>
  )
}

const videoHeaderStyles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: Colors.grey,
    alignItems: 'center',
    paddingVertical: RFPercentage(1)
    // paddingTop: CommonStyles.paddingTop.paddingTop,
  },
  headerText: {
    fontSize: RFPercentage(3),
    fontWeight: '600',
    color: Colors.black,
  },
})

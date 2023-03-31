import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Video from 'react-native-video';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { CommonStyles } from '../../Common/Style';

export default VideoPlayer = ({ route }) => {
  const { external, videoURL } = route.params;
  // console.log("Video URL: ", videoURL);
  return (
    <View style={styles.backgroundVideo}>
      <Video
        controls
        paused
        muted
        source={external ? { uri: videoURL } : videoURL}   // Can be a URL or a local file.
        style={{ flex: 1 }}
      // style={styles.backgroundVideo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
    paddingTop: CommonStyles.paddingTop.paddingTop,
    // marginTop: RFPercentage(11),
    // height: RFPercentage(20),
    // width: RFPercentage(20)
    // justifyContent: 'center',

    // alignItems: 'center',
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
  },
})

import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Video from 'react-native-video';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { CommonStyles } from '../../Common/Style';
import Colors from '../../Common/Colors';

export default VideoPlayer = ({ route }) => {
  const { external, videoURL } = route.params;
  // console.log("Video URL: ", videoURL);
  return (
    <View style={styles.backgroundVideo}>
      {/* <Text style={{}}>Hiiiii</Text> */}
      <Video
        controls
        paused
        muted
        style={styles.video}
        source={external ? { uri: videoURL } : videoURL}   // Can be a URL or a local file.
      />
    </View>
  )
  // return (
  //   <SafeAreaView style={styles.main}>
  //     <View style={styles.container}>
  //       <Text style={styles.txt}>VideoPlay</Text>
  //       <Video
  //         controls={true}
  //         paused={true}
  //         // ref={videoPlayer}
  //         source={external ? { uri: videoURL } : videoURL}
  //         style={styles.mediaPlayer}
  //       />
  //     </View>
  //   </SafeAreaView>
  // )
}

const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
    paddingTop: CommonStyles.paddingTop.paddingTop,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    // justifyContent: 'center',

    // alignSelf: 'center',
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
  video: {
    flex: 1,
    // height: Dimensions.get('screen').height,
    // width: Dimensions.get('screen').width,
    backgroundColor: Colors.grey,
    // justifyContent: 'center',
    // alignItems: 'center'
  },



  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.YANKEES_BLUE,
  },
  mediaPlayer: {
    height: RFPercentage(40),
    width: RFPercentage(40),
    justifyContent: 'center',
  },
  txt: {
    fontSize: RFValue(20),
    marginBottom: RFValue(10),
    color: Colors.White,
  },
})

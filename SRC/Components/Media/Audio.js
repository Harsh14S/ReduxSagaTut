import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../Common/Colors'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { CommonStyles } from '../../Common/Style'
import Sound from 'react-native-sound'
import { IconUri } from '../../Common/Links'

export default Audio = () => {
  const [music, setMusic] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPause, setIsPause] = useState(true);
  const [duration, setDuration] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const play = () => {
    let counting_star = new Sound("counting_star.mp3", Sound.MAIN_BUNDLE, (err) => {
      if (err) {
        console.log('Error: ', err);
        return
      }
      counting_star.play((success) => {
        console.log('end', success);
      })
      setDuration(counting_star.getDuration());
    })
    // console.log("Song: ", counting_star);
    setMusic(counting_star);
  }
  useEffect(() => {

    if (music) {
      setInterval(() => {
        music.getCurrentTime((sec, play) => {
          // console.log("Play: ", play);
          setSeconds(sec);
        })
      }, 1000)
    }
  }, [music])
  return (
    <View style={styles.container}>
      <View style={styles.musicItem}>
        <Pressable style={styles.songTitleContainer} onPress={() => {
          isPlaying ? null : play();
          setIsPlaying(true);
        }}>
          <Text style={styles.songTitle}>Counting Star</Text>
        </Pressable>
        {isPlaying ? (
          <View style={styles.actionBtnContainer}>
            {isPause ? (
              <Pressable style={styles.actionBtn} onPress={() => {
                setIsPause(false)
                music.pause();
              }}>
                <Image style={styles.actionIcon} source={IconUri.PauseIcon} />
              </Pressable>) : (
              <Pressable style={styles.actionBtn} onPress={() => {
                setIsPause(true);
                music.play();
              }}>
                <Image style={styles.actionIcon} source={IconUri.PlayIcon} />
              </Pressable>
            )}
            <Pressable style={styles.actionBtn} onPress={() => {
              // setIsPause(true);
              music.stop();
              setIsPlaying(false);
            }} >
              <Image style={styles.actionIcon} source={IconUri.StopIcon} />
            </Pressable>
          </View>
        ) : null}
      </View>
      <Text>{seconds} / {duration}</Text>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: CommonStyles.paddingTop.paddingTop,
  },
  musicItem: {
    flexDirection: 'row',
    backgroundColor: Colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: RFPercentage(2),
    paddingVertical: RFPercentage(1),
  },
  songTitleContainer: {
    flex: 4,
  },
  actionBtnContainer: {
    flex: 2,
    flexDirection: 'row',
    // backgroundColor: Colors.midnightBlue_80,
  },
  songTitle: {
    // backgroundColor: Colors.grey,
    fontSize: RFPercentage(2.5),
    fontWeight: '700'
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

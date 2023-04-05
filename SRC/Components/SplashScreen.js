import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { IconUri, ImageLinks } from '../Common/Links'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Colors from '../Common/Colors'
import { Image, MotiView } from 'moti'
import { Easing } from 'react-native-reanimated'

export default SplashScreen = ({ navigation }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('LogInSignUp')
  //   }, 1000)
  // }, [])
  return (
    // <ImageBackground style={styles.container} source={ImageLinks.Wardrobe}>
    // </ImageBackground>

    <View style={styles.container}>
      {/* <StatusBar barStyle={'dark-content'} /> */}
      <View style={styles.dot}>

        {
          [...Array(4).keys()].map((index) => {
            return (
              <MotiView
                from={{ opacity: 0.75, scale: 1, }}
                animate={{ opacity: 0, scale: 4, }}
                transition={{
                  type: 'timing',
                  duration: 2000,
                  easing: Easing.out(Easing.ease),
                  delay: index * 500,
                  repeatReverse: false,
                  loop: true,
                }}
                key={index}
                style={[styles.dot, { position: 'absolute' }]}
              />
            )
          })
        }
        <Image source={IconUri.CircleIcon} style={styles.img} />
        {/* <View style={[styles.dot, { backgroundColor: Colors.white }]} /> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black
  },
  dot: {
    alignItems: 'center',
    justifyContent: 'center',
    height: RFPercentage(13),
    width: RFPercentage(13),
    borderRadius: RFPercentage(100),
    backgroundColor: Colors.midnightBlue_80,
  },
  img: {
    height: RFPercentage(9),
    width: RFPercentage(9),
    tintColor: Colors.white,
  }
})

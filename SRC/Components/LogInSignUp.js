import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Common/Colors'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { ImageLinks } from '../Common/Links'

export default LogInSignUp = ({ navigation }) => {
  const [signstyle, setsignStyle] = useState();
  const [logstyle, setLogStyle] = useState();
  return (
    <ImageBackground source={ImageLinks.Wardrobe} style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Let's start Shopping</Text>
        <Pressable
          style={[styles.signUpBtn, signstyle]}
          onPress={() => navigation.navigate('SignUp')}
          onPressIn={() => setsignStyle(styles.opacity)}
          onPressOut={() => setsignStyle(null)}
        >
          <Text style={styles.signUpTxt}>Signup</Text>
        </Pressable>
        <Pressable
          style={[styles.logInBtn, logstyle]}
          onPress={() => navigation.navigate('LogIn')}
          onPressIn={() => setLogStyle(styles.opacity)}
          onPressOut={() => setLogStyle(null)}
        >
          <Text style={styles.logInTxt}>Login</Text>
        </Pressable>
      </View>
    </ImageBackground>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    marginHorizontal: RFPercentage(4),
    // justifyContent: 'center',
    // backgroundColor: Colors.arsenic_88,
    paddingTop: RFPercentage(15),
  },
  heading: {
    // backgroundColor: Colors.arsenic_88,
    fontSize: RFPercentage(9),
    color: Colors.white,
    marginBottom: RFPercentage(5),
  },
  signUpBtn: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: RFPercentage(100),
    paddingVertical: RFPercentage(1.5),
    marginBottom: RFPercentage(2),
    opacity: 1,
  },
  logInBtn: {
    alignItems: 'center',
    backgroundColor: Colors.midnightBlue_80,
    borderRadius: RFPercentage(100),
    paddingVertical: RFPercentage(1.5),
    // marginBottom: RFPercentage(2),
    opacity: 1,
  },
  signUpTxt: {
    color: Colors.midnightBlue_80,
    fontSize: RFPercentage(2.7),
    fontWeight: '700',
  },
  logInTxt: {
    color: Colors.white,
    fontSize: RFPercentage(2.7),
    fontWeight: '700',
  },
  opacity: {
    opacity: 0.7,
  }
})

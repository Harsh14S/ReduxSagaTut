import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Common/Colors'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { ImageLinks } from '../Common/Links'
import { useDispatch } from 'react-redux'
import { CommonStyles } from '../Common/Style'
import Button from './SubComponents/Button'

export default LogInSignUp = ({ navigation }) => {
  const [signstyle, setsignStyle] = useState();
  const [logstyle, setLogStyle] = useState();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(GetUserDataAction());
  // }, [])
  return (
    <ImageBackground source={ImageLinks.Wardrobe} style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Let's start Shopping</Text>
        <Button title='Register' btnStyle={styles.signUpBtn} titleStyle={styles.signUpTxt} onPress={() => navigation.navigate('Registration')} />
        <Button title='Login' btnStyle={styles.logInBtn} titleStyle={styles.logInTxt} onPress={() => navigation.navigate('LogIn')} />
      </View>
    </ImageBackground>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: CommonStyles.paddingTop.paddingTop,
  },
  subContainer: {
    flex: 1,
    marginHorizontal: RFPercentage(4),
    paddingTop: RFPercentage(15),
  },
  heading: {
    fontSize: RFPercentage(9),
    color: Colors.white,
    marginBottom: RFPercentage(5),
  },
  signUpBtn: {
    backgroundColor: Colors.white,
    borderRadius: RFPercentage(100),
    marginBottom: RFPercentage(2),
    height: RFPercentage(7),
  },
  logInBtn: {
    backgroundColor: Colors.midnightBlue_80,
    borderRadius: RFPercentage(100),
    marginBottom: RFPercentage(2),
    height: RFPercentage(7),
  },
  signUpTxt: {
    color: Colors.midnightBlue_80,
    // fontFamily: 'Montserrat-Regular'
  },
  logInTxt: {
    color: Colors.white,
  },
})

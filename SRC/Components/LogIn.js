import { Alert, Dimensions, ImageBackground, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ImageLinks } from '../Common/Links'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Colors from '../Common/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { LoginAction } from '../Redux/Actions/LoginAction'
import DeviceInfo from 'react-native-device-info'
import { CommonStyles } from '../Common/Style'
// import { GetUserProfileAction } from '../Redux/Actions/GetUserProfileAction'

export default LogIn = ({ navigation }) => {
  const dispatch = useDispatch();

  // const [email, setEmail] = useState('tracey.ramos@reqres.in');
  const [email, setEmail] = useState('george.bluth@reqres.in');
  const [password, setPassword] = useState('asdasd');
  const [passVisible, setPassVisible] = useState(true);

  // console.log("UserProfileData: ", UserProfileData.data[0].data[0].avatar);

  // const callApi = async () => {
  //   let userDetails = {
  //     email: email,
  //     password: password
  //   }
  //   await axios.post('https://reqres.in/api/login', userDetails)
  //     .then(res =>
  //       // console.log(res.data, "Login")
  //       navigation.navigate('Home')
  //     )
  //     .catch((e) => console.log(e))
  // }

  const loginConfirm = () => {
    dispatch(LoginAction({ navigation, user: { email: email, password: password } }))
  };


  return (
    <ImageBackground source={ImageLinks.Wardrobe} style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.loginContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.welcomeTitle}>Welcome Back</Text>
          <Text style={styles.subWelcomeTitle}>Login to your account</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputBar}
              placeholder={'Username | Phone | Email'}
              keyboardType={'email-address'}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputBar}
              placeholder={'Password'}
              secureTextEntry={passVisible}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={styles.forgotBtnContainer}>
            <Pressable style={styles.forgotBtn} onPress={() => Alert.alert('Forgot Password')}>
              <Text style={styles.forgotTxt}>Forgot Password?</Text>
            </Pressable>
            <Pressable style={styles.forgotBtn} onPress={() => setPassVisible(!passVisible)}>
              {passVisible ? (
                <Text style={styles.forgotTxt}>Show Password</Text>
              ) : (
                <Text style={styles.forgotTxt}>Hide Password</Text>
              )}

            </Pressable>
          </View>
        </View>
        <Pressable style={styles.loginBtn}
          onPress={() => {
            loginConfirm()
          }}
        >
          <Text style={styles.loginTxt}>Login</Text>
        </Pressable>
        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signupTxt}>Signup</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: CommonStyles.paddingTop.paddingTop,
  },
  title: {
    color: Colors.white,
    fontSize: RFPercentage(8),
    fontWeight: '600',
    marginBottom: RFPercentage(4),
    marginTop: RFPercentage(2),
  },
  loginContainer: {
    flex: 1,
    width: Dimensions.get('screen').width,
    borderTopLeftRadius: RFPercentage(10),
    backgroundColor: Colors.white,
    paddingTop: RFPercentage(6),
    paddingBottom: DeviceInfo.hasNotch() ? RFPercentage(3.5) : RFPercentage(1),
    alignItems: 'center',
    paddingHorizontal: RFPercentage(4),
    // backgroundColor: Colors.lightGrey,
  },
  detailsContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: RFPercentage(4.5),
    fontWeight: '700',
    color: Colors.midnightBlue_80,
    marginBottom: RFPercentage(0.5)
  },
  subWelcomeTitle: {
    fontSize: RFPercentage(2),
    fontWeight: '700',
    color: Colors.grey,
    marginBottom: RFPercentage(3.5)
  },
  inputContainer: {
    // backgroundColor: Colors.silver_90_66,
    padding: Platform.OS === 'ios' ? RFPercentage(1.5) : null,
    marginBottom: RFPercentage(1.5),
    width: '100%',
    borderRadius: RFPercentage(1.3),
    borderWidth: RFPercentage(0.2),
    borderColor: Colors.lightGrey,
  },
  inputBar: {
    marginHorizontal: Platform.OS === 'ios' ? null : RFPercentage(1),
    // backgroundColor: Colors.lightGrey,
    fontSize: RFPercentage(2),
    color: Colors.black_94,
    // width: '100%',
  },
  forgotBtnContainer: {
    flexDirection: 'row',
    marginBottom: RFPercentage(1.5),
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  forgotBtn: {
    marginHorizontal: RFPercentage(1),
  },
  forgotTxt: {
    fontSize: RFPercentage(1.8),
    fontWeight: '700',
    color: Colors.midnightBlue_80,
    // width: '100%',
  },
  loginBtn: {
    width: '100%',
    backgroundColor: Colors.midnightBlue_80,
    alignItems: 'center',
    borderRadius: RFPercentage(100),
    padding: RFPercentage(1),
    marginBottom: RFPercentage(1.5)
  },
  loginTxt: {
    fontSize: RFPercentage(2.5),
    color: Colors.white,
    fontWeight: '800',
  },
  noAccountContainer: {
    flexDirection: 'row',
  },
  noAccountText: {
    color: Colors.grey,
    marginRight: RFPercentage(1)
  },
  signupTxt: {
    fontWeight: '700',
    color: Colors.midnightBlue_80,
  }
})

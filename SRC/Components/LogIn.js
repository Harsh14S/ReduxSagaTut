import { Alert, Dimensions, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IconUri, ImageLinks } from '../Common/Links'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Colors from '../Common/Colors'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { SignupAction } from '../Redux/Actions/SignupAction'
import DeviceInfo from 'react-native-device-info'
import { CommonStyles } from '../Common/Style'
import Input from './SubComponents/Input'
import Button from './SubComponents/Button'
import Loader from './SubComponents/Loader'

export default LogIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const LogInData = useSelector(state => state.SignUp)
  const [email, setEmail] = useState('janet.weaver@reqres.in');
  const [password, setPassword] = useState('pistasd');

  const [inputs, setInputs] = useState({
    email,
    password,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Please enter your email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please enter valid email', 'email');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please enter your password', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Characters must be >5', 'password');
      isValid = false;
    }

    if (isValid) {
      login();
    }
  }
  const login = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      try {
        dispatch(SignupAction({
          email: email,
          password: password,
        }));

        navigation.navigate('LoginDetails', {
          "email": email,
          "password": password,
        })
      } catch (error) {
        Alert.alert('Error', 'Something Went Wrong!!!')
      }
    }, 1000);
  }
  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }))
  }

  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }))
  }
  return (
    <ImageBackground source={ImageLinks.Wardrobe} style={styles.container}>
      <Loader visible={loading} />
      <Text style={styles.title}>Login</Text>
      <View style={styles.loginContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.welcomeTitle}>Welcome Back</Text>
          <Text style={styles.subWelcomeTitle}>Login to your account</Text>
        </View>
        <KeyboardAvoidingView style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
        >
          <ScrollView style={styles.inputContainer} showsVerticalScrollIndicator={false}>
            <Input
              label='Email'
              iconName={IconUri.MailIcon}
              placeholder="Enter Your email address"
              value={inputs.email}
              onChangeText={(text) => {
                handleOnChange(text, "email");
                setEmail(text);
              }}
              error={errors.email}
              // error="Enter Your email address "
              onFocus={() => {
                handleError(null, "email")
              }}
            />
            <Input
              label='Password'
              iconName={IconUri.LockIcon}
              placeholder="Enter Your Password"
              value={inputs.password}
              onChangeText={(text) => {
                handleOnChange(text, "password");
                setPassword(text);
              }}
              error={errors.password}
              onFocus={() => {
                handleError(null, "password")
              }}
              password
            />
            {/* <Button title='Register' onPress={validate} /> */}
          </ScrollView>
          <View style={{ marginTop: RFPercentage(2), marginBottom: RFPercentage(0.6) }}>
            <Button title='Login' onPress={() => validate()} />
          </View>
          <Text style={styles.noAccountText}>Don't have an account? <Text style={styles.signupTxt} onPress={() => navigation.navigate('Registration')}>Register</Text></Text>
        </KeyboardAvoidingView>
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
    paddingTop: RFPercentage(8),
    paddingBottom: DeviceInfo.hasNotch() ? RFPercentage(3.5) : RFPercentage(1),
    paddingHorizontal: RFPercentage(4),
    // backgroundColor: Colors.grey,
  },
  detailsContainer: {
    width: '100%',
    alignItems: 'center',
    // backgroundColor: Colors.lightGrey,
    marginBottom: RFPercentage(1),
  },
  welcomeTitle: {
    fontSize: RFPercentage(4.5),
    fontWeight: '700',
    color: Colors.midnightBlue_80,
    // marginBottom: RFPercentage(0.5),
  },
  subWelcomeTitle: {
    fontSize: RFPercentage(2),
    fontWeight: '700',
    color: Colors.grey,
  },
  inputContainer: {
    flex: 1,
    // justifyContent: "space-evenly"
    // backgroundColor: Colors.lightGrey,
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
  noAccountText: {
    color: Colors.grey,
    textAlign: 'center'
  },
  signupTxt: {
    fontWeight: '700',
    color: Colors.midnightBlue_80,
  }
})

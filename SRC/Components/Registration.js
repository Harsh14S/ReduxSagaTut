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

export default Registration = ({ navigation }) => {
  const dispatch = useDispatch();
  const SignupData = useSelector(state => state.SignUp)
  const [email, setEmail] = useState('janet.weaver@reqres.in');
  const [fullname, setFullname] = useState('Janet Weaver');
  const [phone, setPhone] = useState('9054612321');
  const [password, setPassword] = useState('pistasdaasdol');
  const [repassword, setRepassword] = useState('pistasdaasdol');

  const [inputs, setInputs] = useState({
    // email: "",
    // fullname: "",
    // phone: "",
    // password: "",
    // repassword: "",
    email,
    fullname,
    phone,
    password,
    repassword,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    // ^\\d{10}$
    if (!inputs.email) {
      handleError('Please enter your email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please enter valid email', 'email');
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError('Please enter your fullname', 'fullname');
      isValid = false;
    }

    if (!inputs.phone) {
      handleError('Please enter your phone number', 'phone');
      isValid = false;
    } else if (!inputs.phone.match(/^[0]?[6789]\d{9}$/)) {
      handleError('Please enter valid phone number', 'phone');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please enter your password', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Characters must be >5', 'password');
      isValid = false;
    }

    if (inputs.password !== inputs.repassword) {
      handleError(`Your password doesn't match`, 'repassword');
      isValid = false;
    }

    if (isValid) {
      register();
    }
  }
  const register = () => {
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
          "fullname": fullname,
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
      <Text style={styles.title}>Register</Text>
      <View style={styles.loginContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.welcomeTitle}>Welcome</Text>
          <Text style={styles.subWelcomeTitle}>Enter your details here</Text>
        </View>
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
            label='Fullname'
            iconName={IconUri.NameIcon}
            placeholder="Enter Your Full Name"
            value={inputs.fullname}
            onChangeText={(text) => {
              handleOnChange(text, "fullname");
              setFullname(text);
            }}
            error={errors.fullname}
            onFocus={() => {
              handleError(null, "fullname")
            }}
          />
          <Input
            label='Phone Number'
            iconName={IconUri.PhoneIcon}
            placeholder="Enter Your phone number"
            value={inputs.phone}
            keyboardType="numeric"
            onChangeText={(text) => {
              handleOnChange(text, "phone");
              setPhone(text);
            }}
            error={errors.phone}
            onFocus={() => {
              handleError(null, "phone")
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
          <Input
            label='Confirm Password'
            iconName={IconUri.LockIcon}
            placeholder="Re-Enter Your Password"
            value={inputs.repassword}
            onChangeText={(text) => {
              handleOnChange(text, "repassword");
              setRepassword(text);
            }}
            error={errors.repassword}
            onFocus={() => {
              handleError(null, "repassword")
            }}
            password
          />
          {/* <Button title='Register' onPress={validate} /> */}
        </ScrollView>
        <View style={{ marginTop: RFPercentage(2), marginBottom: RFPercentage(0.6) }}>
          <Button title='Register' onPress={() => validate()} />
        </View>
        <Text style={styles.noAccountText}>Already have an account? <Text style={styles.signupTxt} onPress={() => navigation.navigate('LogIn')}>Login</Text></Text>
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
    textAlign: 'center',
    // marginBottom: RFPercentage(2),
  },
  signupTxt: {
    fontWeight: '700',
    color: Colors.midnightBlue_80,
  }
})

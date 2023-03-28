import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Colors from '../Common/Colors'
import { useSelector } from 'react-redux'
import { RFPercentage } from 'react-native-responsive-fontsize'

export default LoginDetails = ({ route, navigation }) => {
  const LoginData = useSelector(state => state.LogIn);
  const SignupData = useSelector(state => state.SignUp);
  // console.log("Route: ", route.params);
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('DrawerNav')
    }, 1500)
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Text style={styles.heading}>Your Login Details</Text>
      <View style={styles.separator} />
      <View style={styles.detailsContainer}>
        <Text style={styles.titleTxt}>Email</Text>
        <Text style={styles.txt}>{route.params.email}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.titleTxt}>Password</Text>
        <Text style={styles.txt}>{route.params.password}</Text>
      </View>
      <View style={styles.separator} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: RFPercentage(4),
    fontWeight: '700',
    marginBottom: RFPercentage(2),
    color: Colors.midnightBlue_80
  },
  detailsContainer: {
    flexDirection: 'row',
    marginVertical: RFPercentage(0.5),
    width: '80%'
  },
  titleTxt: {
    flex: 1,
    fontSize: RFPercentage(2.5),
    fontWeight: '500',
    color: Colors.midnightBlue_80
  },
  txt: {
    flex: 2,
    fontSize: RFPercentage(2.2),
    fontWeight: '400',
    color: Colors.grey
  },
  separator: {
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.grey,
    width: '85%',
    marginVertical: RFPercentage(1)
  }
})

import { Image, Platform, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Colors from '../Common/Colors'
import { IconUri, ImageLinks } from '../Common/Links'
import DeviceInfo from 'react-native-device-info'
import { useSelector } from 'react-redux'

export default DrawerComponent = ({ navigation }) => {
  // console.log("Has Notch: ", DeviceInfo.hasNotch());
  const UserProfileData = useSelector(state => state.GetUserProfile);
  console.log("UserProfileData: ", UserProfileData.data[0].data[1].avatar);
  const ProfileImg = UserProfileData.data[0].data[1].avatar;
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.headerSection}>
        <TouchableOpacity activeOpacity={0.5} style={styles.userProfileBtn}>
          <Image style={styles.userProfileImg} source={{ uri: `${ProfileImg}` } || IconUri.ProfileIcon} />
        </TouchableOpacity>
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>George Bluth</Text>
          <Text style={styles.userEmail}>george.bluth@reqres.in</Text>
        </View>
      </View>

      <View style={styles.bodySection}>
        <TouchableOpacity activeOpacity={0.5} style={styles.screenNavContainer} onPress={() => navigation.navigate('Home')}>
          <Image style={styles.screenLogo} source={IconUri.HomeIcon} />
          <Text style={styles.screenName}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={styles.screenNavContainer} onPress={() => navigation.navigate('Cart')}>
          <Image style={styles.screenLogo} source={IconUri.CartFilledIcon} />
          <Text style={styles.screenName}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={styles.screenNavContainer} onPress={() => navigation.navigate('Profile')}>
          <Image style={styles.screenLogo} source={IconUri.ProfileIcon} />
          <Text style={styles.screenName}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={styles.screenNavContainer} onPress={() => navigation.navigate('Settings')}>
          <Image style={styles.screenLogo} source={IconUri.SettingIcon} />
          <Text style={styles.screenName}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.midnightBlue_80,
  },
  headerSection: {
    marginTop: RFPercentage(6),
    backgroundColor: Colors.midnightBlue_80,
    alignItems: 'center'
  },
  userProfileBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: RFPercentage(15),
    width: RFPercentage(15),
    backgroundColor: Colors.black_94,
    borderRadius: RFPercentage(100),
    overflow: 'hidden'
  },
  userProfileImg: {
    height: RFPercentage(15),
    width: RFPercentage(15),
    // borderRadius: RFPercentage(100),
    // tintColor: Colors.lightGrey,
  },
  userNameContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    marginTop: RFPercentage(1.3),
  },
  userName: {
    color: Colors.white,
    fontSize: RFPercentage(2.5),
    fontWeight: '700',
    marginBottom: RFPercentage(0.4),
  },
  userEmail: {
    color: Colors.grey,
    fontSize: RFPercentage(1.5),
    fontWeight: '500',
    marginBottom: RFPercentage(0.4),
  },
  bodySection: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: RFPercentage(2),
    paddingTop: RFPercentage(1.5)
  },
  screenNavContainer: {
    flexDirection: 'row',
    // backgroundColor: Colors.grey,
    paddingHorizontal: RFPercentage(1),
    paddingVertical: RFPercentage(0.5),
    marginVertical: RFPercentage(0.5),
    alignItems: "center",
    // borderRadius: RFPercentage(1),
  },
  screenLogo: {
    height: RFPercentage(2.5),
    width: RFPercentage(2.5),
  },
  screenName: {
    // backgroundColor: Colors.grey,
    fontSize: RFPercentage(2),
    fontWeight: '600',
    marginVertical: RFPercentage(1),
    marginHorizontal: RFPercentage(1.8),
  },
})

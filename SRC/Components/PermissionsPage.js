import { Platform, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Common/Colors'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { request, PERMISSIONS } from 'react-native-permissions';
import { CommonStyles } from '../Common/Style';

export default PermissionsPage = ({ navigation }) => {
  const askForPermissions = (permission) => {
    request(permission).then((result) => {
      console.log("Permission Result: ", result);
    });
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Pressable
        style={styles.permissionBtn}
        onPress={() => {
          Platform.OS === 'ios' ? askForPermissions(PERMISSIONS.IOS.CAMERA)
            : askForPermissions(PERMISSIONS.ANDROID.CAMERA);
        }}>
        <Text style={styles.permissionBtnTxt}>Camera</Text>
      </Pressable>

      <Pressable
        style={styles.permissionBtn}
        onPress={() => {
          Platform.OS === 'ios' ? askForPermissions(PERMISSIONS.IOS.PHOTO_LIBRARY)
            : askForPermissions(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
        }}>
        <Text style={styles.permissionBtnTxt}>Gallery</Text>
      </Pressable>

      <Pressable
        style={styles.permissionBtn}
        onPress={() => {
          Platform.OS === 'ios' ? askForPermissions(PERMISSIONS.IOS.CONTACTS)
            : askForPermissions(PERMISSIONS.ANDROID.READ_CONTACTS);
        }}>
        <Text style={styles.permissionBtnTxt}>Contacts</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingTop: CommonStyles.paddingTop.paddingTop,
  },
  permissionBtn: {
    backgroundColor: Colors.midnightBlue_80,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: RFPercentage(2),
    borderRadius: RFPercentage(1.4),
    marginVertical: RFPercentage(1),
  },
  permissionBtnTxt: {
    color: Colors.white,
    fontSize: RFPercentage(2),
    fontWeight: '700',
  },
})

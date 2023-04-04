import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import Colors from '../../Common/Colors'
import { IconUri } from '../../Common/Links'

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => { },
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);
  return (
    <View style={styles.container}>
      <Text style={styles.labelTxt}>{label}</Text>
      <View style={[styles.inputContainer, { borderColor: error ? Colors.red : isFocused ? Colors.midnightBlue_80 : Colors.lightGrey }]}>
        {/* <View> */}
        <Image style={styles.iconImage} source={iconName} />
        <TextInput
          secureTextEntry={hidePassword}
          autoCorrect={false}
          autoCapitalize={'none'}
          style={styles.inputBox}
          {...props}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
        />
        {password && <Pressable onPress={() => {
          setHidePassword(!hidePassword);
        }}>
          <Image style={styles.iconImage} source={hidePassword ? IconUri.EyeIcon : IconUri.EyeHideIcon} />
        </Pressable>}
      </View>
      {error && (
        <Text style={styles.errorText}>{error}</Text>
      )}
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    marginVertical: RFPercentage(1),
  },
  labelTxt: {
    fontSize: RFPercentage(2),
    color: Colors.grey,
    marginBottom: RFPercentage(1),
    fontWeight: '500',
  },
  inputContainer: {
    borderRadius: RFPercentage(1),
    overflow: 'hidden',
    height: RFPercentage(6),
    borderWidth: RFValue(0.5),
    backgroundColor: Colors.lightGrey,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconImage: {
    height: RFPercentage(2.5),
    width: RFPercentage(2.5),
    marginHorizontal: RFPercentage(2),
    tintColor: Colors.midnightBlue_80,
  },
  inputBox: {
    flex: 1,
    color: Colors.midnightBlue_80,
    fontSize: RFPercentage(1.8)
  },
  errorText: {
    color: Colors.red,
    fontSize: RFPercentage(1.5),
    marginTop: RFPercentage(1)
  }

})

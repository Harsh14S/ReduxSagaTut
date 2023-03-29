import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart } from '../Redux/Actions/Action'
import { IconUri } from '../Common/Links'

export default CartHeader = ({ navigation }) => {
  const CartData = useSelector((state) => state.CartData);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.left}
        onPress={() => navigation.goBack()}
      >
        <Image source={IconUri.LeftArrowIcon} style={styles.leftIcon} resizeMode={'contain'} />
      </Pressable>
      <Pressable style={styles.mid}>
        <Text style={styles.headingTxt}>Cart</Text>
      </Pressable>

      <Pressable style={styles.right} onPress={() => dispatch(emptyCart())}>
        <Image source={IconUri.BinIcon} style={styles.rightIcon} resizeMode={'contain'} />
      </Pressable>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    paddingHorizontal: RFPercentage(1.5),
  },
  left: {
    padding: RFPercentage(1.25),
    backgroundColor: Colors.midnightBlue_80,
    borderRadius: RFPercentage(100),
  },
  leftIcon: {
    height: RFPercentage(3),
    width: RFPercentage(3),
    tintColor: Colors.white,
  },
  mid: {
    flex: 1,
    alignItems: 'center',
  },
  headingTxt: {
    fontSize: RFPercentage(3),
    fontWeight: '700',
    color: Colors.black_94
  },
  right: {
    padding: RFPercentage(1),
    backgroundColor: Colors.midnightBlue_80,
    borderRadius: RFPercentage(100),
  },
  rightIcon: {
    height: RFPercentage(3.5),
    width: RFPercentage(3.5),
    tintColor: Colors.white,
  },
})

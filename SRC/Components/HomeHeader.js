import { Alert, Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useDebugValue, useState } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart } from '../Redux/Actions/Action'
import Colors from '../Common/Colors'
import { IconUri } from '../Common/Links'

export default HomeHeader = ({ navigation }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const CartData = useSelector((state) => state.CartData);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.left}
        onPress={() => navigation.openDrawer()}
      >
        <Image source={IconUri.BarsIcon} style={styles.barImg} resizeMode={'contain'} />
      </Pressable>
      <Pressable style={styles.mid}>
        <Text style={styles.headingTxt}>Home</Text>
      </Pressable>

      <Pressable style={styles.right} onPress={() => navigation.navigate('Cart')}>
        <Image source={CartData.length > 0 ? IconUri.CartFilledIcon : IconUri.CartIcon} style={styles.cartImg} resizeMode={'contain'} />

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
  barImg: {
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartImg: {
    height: RFPercentage(3.5),
    width: RFPercentage(3.5),
    tintColor: Colors.white,
  },

})

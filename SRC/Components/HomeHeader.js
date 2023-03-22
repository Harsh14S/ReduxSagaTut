import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useDebugValue, useState } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart } from '../Redux/Actions/Action'

export default HomeHeader = ({ navigation }) => {
  const CartData = useSelector((state) => state.CartData);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.left}
        onPress={() => dispatch(emptyCart())}
      >
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/471/471715.png' }} style={styles.cartImg} resizeMode={'contain'} />
      </Pressable>
      <Pressable style={styles.mid}>
        <Text style={styles.headingTxt}>Products</Text>
      </Pressable>
      <Pressable style={styles.right} onPress={() => navigation.navigate('Cart')}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4297/4297127.png' }} style={styles.cartImg} resizeMode={'contain'} />
        {
          CartData.length > 0 ?
            (<View style={styles.itemIndicatorView}>
              <Text style={styles.itemIndicator}>{CartData.length}</Text>
            </View>) : null}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: 'gold',
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    padding: RFPercentage(1),
    // justifyContent: 'space-evenly',
  },
  left: {
    paddingHorizontal: RFPercentage(1),
  },
  btnTxt: {
    fontSize: RFPercentage(1.6),
    color: 'white',
    fontWeight: '700',
  },
  mid: {
    flex: 1,
    alignItems: 'center',
  },
  headingTxt: {
    fontSize: RFPercentage(2.5),
    fontWeight: '700',
  },
  right: {
    paddingHorizontal: RFPercentage(1),
  },
  cartImg: {
    height: RFPercentage(5),
    width: RFPercentage(5),
    tintColor: 'black',
  },
  itemIndicatorView: {
    width: RFPercentage(3),
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    backgroundColor: 'darkgreen',
    borderRadius: RFPercentage(100),
    padding: RFPercentage(0.6),
  },
  itemIndicator: {
    color: 'white',
    fontSize: RFPercentage(1.4)
  }
})

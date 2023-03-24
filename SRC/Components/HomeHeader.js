import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useDebugValue, useState } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart } from '../Redux/Actions/Action'
import HomeSearchBar from './HomeSearchBar'

export default HomeHeader = ({ navigation }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const CartData = useSelector((state) => state.CartData);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.left}
        onPress={() => setShowSearchBar(!showSearchBar)}
      >
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5948/5948534.png' }} style={styles.searchImg} resizeMode={'contain'} />
      </Pressable>
      {
        showSearchBar ? (
          <HomeSearchBar />
        ) : (
          <Pressable style={styles.mid}>
            <Text style={styles.headingTxt}>Products</Text>
          </Pressable>
        )}
      {
        showSearchBar ? null :
          (<Pressable style={styles.right} onPress={() => navigation.navigate('Cart')}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2832/2832495.png' }} style={styles.cartImg} resizeMode={'contain'} />
            {
              CartData.length > 0 ?
                (<View style={styles.itemIndicatorView}>
                  <Text style={styles.itemIndicator}>{CartData.length}</Text>
                </View>) : null}
          </Pressable>)}
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
    padding: RFPercentage(1.25),
    backgroundColor: 'lightgrey',
    borderRadius: RFPercentage(100),
  },
  searchImg: {
    height: RFPercentage(3),
    width: RFPercentage(3),
    tintColor: 'black',
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
    padding: RFPercentage(1),
    backgroundColor: 'lightgrey',
    borderRadius: RFPercentage(100),
  },
  cartImg: {
    height: RFPercentage(3.5),
    width: RFPercentage(3.5),
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
  },
})

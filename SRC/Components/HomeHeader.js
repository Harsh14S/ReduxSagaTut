import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useSelector } from 'react-redux'

export default HomeHeader = () => {
  const CartData = useSelector((state) => state.CartData);
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text>Left</Text>
      </View>
      <View style={styles.mid}>
        <Text>Mid</Text>
      </View>
      <Pressable style={styles.right}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4297/4297127.png' }} style={styles.cartImg} resizeMode={'contain'} />
        <View style={styles.itemIndicatorView}>
          <Text style={styles.itemIndicator}>{CartData.length}</Text>
        </View>
      </Pressable>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'gold',
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    padding: RFPercentage(1),
    // justifyContent: 'space-evenly',
  },
  left: {
    flex: 1,
  },
  mid: {
    flex: 8,
    alignItems: 'center'
  },
  right: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: RFPercentage(1),
  },
  cartImg: {
    height: RFPercentage(4),
    width: RFPercentage(4),
    tintColor: 'black',
  },
  itemIndicatorView: {
    width: RFPercentage(3),
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    backgroundColor: 'white',
    borderRadius: RFPercentage(100),
    padding: RFPercentage(0.5),
  },
  itemIndicator: {
    color: 'black',
  }
})

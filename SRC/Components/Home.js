import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from './HomeHeader'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, emptyCart, removeFromCart } from '../Redux/Actions/Action';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { productList } from '../Redux/Actions/ProductAction';

const Home = () => {
  const ProductData = useSelector((state) => state.ProductData)
  const CartData = useSelector((state) => state.CartData)
  const dispatch = useDispatch();
  const product = {
    name: 'Mobile 1',
    type: 'SmartPhone',
    price: 17999,
    color: 'paleblue'
  }
  return (
    <View style={styles.container}>
      <HomeHeader />
      <Pressable
        style={styles.btn}
        onPress={() => dispatch(addToCart(product))}
      >
        <Text style={styles.btnTxt}>Add To Cart</Text>
      </Pressable>
      <Pressable
        style={styles.btn}
        onPress={() => dispatch(removeFromCart(product.name))}
      >
        <Text style={styles.btnTxt}>Remove From Cart</Text>
      </Pressable>
      <Pressable
        style={styles.btn}
        onPress={() => dispatch(emptyCart())}
      >
        <Text style={styles.btnTxt}>Empty Cart</Text>
      </Pressable>
      <Pressable
        style={styles.btn}
        onPress={() => dispatch(productList(CartData))}
      >
        <Text style={styles.btnTxt}>Product List</Text>
      </Pressable>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white'
  },
  btn: {
    // flex: 1,
    backgroundColor: 'darkorange',
    margin: RFPercentage(2),
    padding: RFPercentage(1.8),
    borderRadius: RFPercentage(1),
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: RFPercentage(2),
    color: 'white',
    fontWeight: '700'
  }
})

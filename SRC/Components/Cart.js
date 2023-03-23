import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../Redux/Actions/Action';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { productList } from '../Redux/Actions/ProductAction';
import CartHeader from './CartHeader';
import CartBillComponent from './CartBillComponent';

export default Cart = ({ navigation }) => {

  const CartData = useSelector((state) => state.CartData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <View style={styles.container}>
      <CartHeader navigation={navigation} />
      <CartBillComponent />
      <FlatList
        data={CartData}
        renderItem={({ item, index }) => (
          <View key={index} style={{ margin: RFPercentage(1) }}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <View style={styles.detailsContainer}>
                <Text>Product: {item.title}</Text>
                <Text>Price: {item.price}</Text>
                <Text>Brand: {item.brand}</Text>
                <Text>Category: {item.category}</Text>
                <Text>Description: {item.description}</Text>
              </View>
              <Image
                source={{ uri: item.thumbnail }}
                style={styles.thumbnail}
                resizeMode={'contain'}
              />
            </View>
            <View style={styles.btnContainers}>
              <Pressable
                style={styles.btn}
                onPress={() => dispatch(removeFromCart(item.id))}
              >
                <Text style={styles.btnTxt}>Remove From Cart</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('screen').width,
    backgroundColor: 'white',
  },
  btnContainers: {
    // flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: RFPercentage(1),
  },
  emptybtn: {
    backgroundColor: 'darkgreen',
    marginHorizontal: RFPercentage(5),
    marginTop: RFPercentage(2),
    paddingVertical: RFPercentage(1.5),
    borderRadius: RFPercentage(1.5),
    alignItems: 'center',
  },
  btn: {
    flex: 1,
    backgroundColor: 'darkred',
    marginHorizontal: RFPercentage(2),
    paddingVertical: RFPercentage(1.5),
    borderRadius: RFPercentage(1.5),
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: RFPercentage(1.6),
    color: 'white',
    fontWeight: '700',
  },
  productContainer: {

  },
  thumbnail: {
    height: RFPercentage(20),
    width: RFPercentage(20),
  },
  detailsContainer: {
    flex: 1,
    padding: RFPercentage(0.5),
    justifyContent: 'space-evenly',
  }
})

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: 'gold',
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
    height: RFPercentage(4),
    width: RFPercentage(4),
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

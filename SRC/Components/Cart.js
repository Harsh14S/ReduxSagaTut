import { Dimensions, FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../Redux/Actions/Action';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { productList } from '../Redux/Actions/ProductAction';
import CartHeader from './CartHeader';
import CartBillComponent from './CartBillComponent';
import Colors from '../Common/Colors';
import { ImageLinks } from '../Common/Links';

export default Cart = ({ navigation }) => {

  const CartData = useSelector((state) => state.CartData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <CartHeader navigation={navigation} />
      {CartData.length > 0 ? (
        <View>
          <CartBillComponent />
          <FlatList
            data={CartData}
            renderItem={({ item, index }) => (
              <View key={index} style={{ marginHorizontal: RFPercentage(1.5), marginBottom: RFPercentage(1) }}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <View style={styles.detailsContainer}>
                    <Text style={styles.headingTxt}>Product: <Text style={styles.txt}>{item.title}</Text></Text>
                    <Text style={styles.headingTxt}>Price: <Text style={styles.txt}>{item.price}</Text></Text>
                    <Text style={styles.headingTxt}>Brand: <Text style={styles.txt}>{item.brand}</Text></Text>
                    <Text style={styles.headingTxt}>Category: <Text style={styles.txt}>{item.category}</Text></Text>
                    <Text style={styles.headingTxt}>Description: <Text style={styles.txt}>{item.description}</Text></Text>
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
      ) : (
        <View style={{ flex: 1, alignItems: 'center', marginTop: RFPercentage(15) }}>
          <Image
            source={ImageLinks.EmptyCart}
            resizeMode={'contain'}
            style={{ height: RFPercentage(50), width: RFPercentage(50), tintColor: Colors.midnightBlue_80 }}
          />
        </View>
      )}
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('screen').width,
    backgroundColor: 'white',
  },
  btnContainers: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: RFPercentage(1),
  },
  btn: {
    flex: 1,
    backgroundColor: Colors.midnightBlue_80,
    marginHorizontal: RFPercentage(2),
    paddingVertical: RFPercentage(1.5),
    borderRadius: RFPercentage(1.5),
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: RFPercentage(1.6),
    color: Colors.white,
    fontWeight: '700',
  },
  thumbnail: {
    height: RFPercentage(20),
    width: RFPercentage(20),
  },
  detailsContainer: {
    flex: 1,
    padding: RFPercentage(0.5),
    justifyContent: 'space-evenly',
  },
  headingTxt: {
    fontWeight: '700',
    color: Colors.black_94,
    fontSize: RFPercentage(1.6),
  },
  txt: {
    fontWeight: '400',
    color: Colors.black_94,
    fontSize: RFPercentage(1.6),
  },
})


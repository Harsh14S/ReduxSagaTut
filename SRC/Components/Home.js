import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../Redux/Actions/Action';
import { RFPercentage } from 'react-native-responsive-fontsize';
import HomeHeader from './HomeHeader';
import HomeSearchBar from './HomeSearchBar';
import { GetProductAction } from '../Redux/Actions/GetProductAction';

const Home = ({ navigation }) => {
  const [data, setData] = useState('');
  const dispatch = useDispatch();
  const getProductData = useSelector((state) => state.GetProduct);

  useEffect(() => {
    dispatch(GetProductAction());
  }, []);

  useEffect(() => {
    const Product = getProductData && getProductData.data && getProductData.data[0];
    setData(Product)
    // console.log('product', Product);
  }, [getProductData])  // dependency is compulsory so that data is rendered properly after getting on this page (getProductData)
  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation} />
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View key={index} style={{ marginHorizontal: RFPercentage(1), marginBottom: RFPercentage(1) }}>
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
                onPress={() => dispatch(addToCart(item))}
              >
                <Text style={styles.btnTxt}>Add To Cart</Text>
              </Pressable>
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

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('screen').width,
    backgroundColor: 'white'
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

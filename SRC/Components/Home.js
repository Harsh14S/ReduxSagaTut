import { Dimensions, FlatList, Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../Redux/Actions/Action';
import { RFPercentage } from 'react-native-responsive-fontsize';
import HomeHeader from './HomeHeader';
import { GetProductAction } from '../Redux/Actions/GetProductAction';
import Colors from '../Common/Colors';
import { IconUri } from '../Common/Links';
import DeviceInfo from 'react-native-device-info';

export default Home = ({ navigation }) => {
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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <HomeHeader navigation={navigation} />
      <Pressable style={styles.searchBar} onPress={() => navigation.navigate('SearchProduct')}>
        <Image style={styles.searchBarIcons} source={IconUri.SearchIcon} resizeMode={'contain'} />
        <Text style={styles.searchBarTxt}>Search for products</Text>
        <Image style={styles.searchBarIcons} source={IconUri.MicrophoneIcon} resizeMode={'contain'} />
        <Image style={styles.searchBarIcons} source={IconUri.CameraIcon} resizeMode={'contain'} />
      </Pressable>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
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
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('screen').width,
    backgroundColor: Colors.white,
    paddingTop: DeviceInfo.hasNotch() ? null : RFPercentage(1.5),
  },
  searchBar: {
    backgroundColor: Colors.midnightBlue_80,
    flexDirection: 'row',
    borderWidth: RFPercentage(0.1),
    borderBottomColor: '',
    alignItems: 'center',
    marginHorizontal: RFPercentage(1.5),
    marginTop: RFPercentage(1),
    borderRadius: RFPercentage(1.5),
    borderColor: Colors.lightGrey,
    overflow: 'hidden',
    paddingRight: RFPercentage(1.5),
    paddingVertical: RFPercentage(1.4)
  },
  searchBarIcons: {
    height: RFPercentage(2.5),
    width: RFPercentage(2.5),
    tintColor: Colors.white,
    marginLeft: RFPercentage(1.5)
  },
  searchBarTxt: {
    flex: 1,
    paddingLeft: RFPercentage(2),
    fontSize: RFPercentage(2),
    color: Colors.white,
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

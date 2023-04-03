import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import Colors from '../Common/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { GetSearchProductAction } from '../Redux/Actions/GetSearchProductAction'
import { addToCart, removeFromCart } from '../Redux/Actions/Action'
import { CommonStyles } from '../Common/Style'

export default SearchPage = ({ navigation }) => {
  const [data, setData] = useState('');
  const dispatch = useDispatch();
  const SearchProductData = useSelector(state => state.GetSearchProduct)
  console.log(SearchProductData, ' : SearchProductData');

  const SearchProduct = SearchProductData && SearchProductData.data && SearchProductData.data[0];
  // setData(SearchProduct)

  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      <SearchBar navigation={navigation} />
      <FlatList
        // scrollEnabled={false}
        style={{ flex: 1 }}
        data={SearchProduct}
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
      {/* </ScrollView> */}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: CommonStyles.paddingTop.paddingTop,
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
  }
})

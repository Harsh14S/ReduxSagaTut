import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useDispatch } from 'react-redux'
import { searchProduct } from '../Redux/Actions/ProductAction'

export default HomeSearchBar = () => {
  const dispatch = useDispatch();
  const [searchTxt, setSearchTxt] = useState('');
  const [style, setStyle] = useState();
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Search'
        style={styles.searchBar}
        onChangeText={(text) => setSearchTxt(text)}
      />
      <Pressable style={styles.iconContainer}
        onPress={() => dispatch(searchProduct(searchTxt))}
        onPressIn={() => setStyle(styles.searchIconColor)}
        onPressOut={() => setStyle(styles.searchIcon)}
      >
        <Image style={[styles.searchIcon, style]} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3686/3686896.png' }} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: RFPercentage(1.5),
    // marginHorizontal: RFPercentage(1),
    flexDirection: 'row',
    justifyContent: 'center'
  },
  searchBar: {
    flex: 1,
    backgroundColor: 'lightgrey',
    paddingHorizontal: RFPercentage(2.5),
    borderRadius: RFPercentage(1.5),
    color: 'black',
    fontSize: RFPercentage(2.5)
  },
  searchIcon: {
    height: RFPercentage(5),
    width: RFPercentage(5),
    tintColor: 'black',
  },
  searchIconColor: {
    tintColor: 'lightgrey',
  },
  iconContainer: {
    marginLeft: RFPercentage(1),
    borderRadius: RFPercentage(100),
  }
})

import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useDispatch } from 'react-redux'
import { GetProductAction } from '../Redux/Actions/GetProductAction'

export default HomeSearchBar = () => {
  const dispatch = useDispatch();
  const [searchTxt, setSearchTxt] = useState('');
  const [style, setStyle] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder='Search'
          style={styles.searchBar}
          value={searchTxt}
          onChangeText={(text) => {
            if (text === '') { setSearchTxt(text), dispatch(GetProductAction(text)) }
            else setSearchTxt(text)
          }}
        />
      </View>
      <Pressable style={styles.crossContainer}
        onPress={() => { dispatch(GetProductAction(searchTxt)) }}
        onPressIn={() => setStyle(styles.searchIconColor)}

        onPressOut={() => setStyle(styles.searchIcon)}
      >
        <Image style={[styles.searchIcon, style]} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3416/3416079.png' }} />
      </Pressable>
      {/* <Button title='Clear' onPress={() => dispatch(GetProductAction(searchTxt))} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: RFPercentage(1.5),
    // padding: RFPercentage(0.2),
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: RFPercentage(5),
    overflow: 'hidden',
    paddingVertical: RFPercentage(0.6)
  },
  searchBarContainer: {
    flex: 1,
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    paddingHorizontal: RFPercentage(2.5),
    color: 'black',
    fontSize: RFPercentage(2.5),
  },
  searchIcon: {
    height: RFPercentage(4),
    width: RFPercentage(4),
    tintColor: 'black',
  },
  searchIconColor: {
    opacity: 0.5,
  },
  crossContainer: {
    marginHorizontal: RFPercentage(0.7),
    borderRadius: RFPercentage(100),
  },
})

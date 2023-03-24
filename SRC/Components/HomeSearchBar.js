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
      <Pressable style={styles.iconContainer}
        onPress={() => { dispatch(GetProductAction(searchTxt)) }}
        onPressIn={() => setStyle(styles.searchIconColor)}

        onPressOut={() => setStyle(styles.searchIcon)}
      >
        <Image style={[styles.searchIcon, style]} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3686/3686896.png' }} />
      </Pressable>
      {/* <Button title='Clear' onPress={() => { setSearchTxt(''), dispatch(GetProductAction()) }} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: RFPercentage(1.5),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchBarContainer: {
    flex: 1,
    backgroundColor: 'lightgrey',
    borderRadius: RFPercentage(1.5),
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

  },
})

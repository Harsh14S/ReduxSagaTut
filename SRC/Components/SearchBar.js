import { Alert, Image, Pressable, StyleSheet, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useDispatch, useSelector } from 'react-redux'
import Colors from '../Common/Colors'
import { IconUri } from '../Common/Links'
import { GetSearchProductAction } from '../Redux/Actions/GetSearchProductAction'

export default SearchBar = ({ navigation }) => {
  const SearchProduct = useSelector(state => state.GetSearchProduct)
  // console.log("SearchProduct: ", SearchProduct.data);
  const [textActive, setTextActive] = useState(false);
  const dispatch = useDispatch();
  const [searchTxt, setSearchTxt] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        {
          textActive ? null : (<Pressable onPress={() => Alert.alert('Camera')}>
            <Image style={styles.searchBarIcons} source={IconUri.SearchIcon} resizeMode={'contain'} />
          </Pressable>)
        }
        {
          textActive ? (<Pressable onPress={() => navigation.navigate('Home')}>
            <Image style={styles.searchBarIcons} source={IconUri.LeftArrowIcon} resizeMode={'contain'} />
          </Pressable>) : null
        }
        <TextInput
          style={styles.searchBarTxt}
          placeholder={'Search for products'}
          placeholderTextColor={Colors.grey}
          // onFocus={() => { }}
          autoFocus={true}
          autoCapitalize={'none'}
          autoCorrect={false}
          autoComplete={'off'}
          value={searchTxt}
          onChangeText={(text) => {
            setSearchTxt(text);
            if (text === '' || text === null) {
              setTextActive(false)
              setSearchTxt(undefined)
            } else {
              setTextActive(true)
              dispatch(GetSearchProductAction(searchTxt))
            }
          }}
        />
        {
          textActive ? null : (<Pressable onPress={() => Alert.alert('Camera')}>
            <Image style={styles.searchBarIcons} source={IconUri.MicrophoneIcon} resizeMode={'contain'} />
          </Pressable>)
        }
        {
          textActive ? null : (<Pressable onPress={() => Alert.alert('Camera')}>
            <Image style={styles.searchBarIcons} source={IconUri.CameraIcon} resizeMode={'contain'} />
          </Pressable>)
        }
        {
          textActive ? (<Pressable onPress={() => setSearchTxt('')}>
            <Image style={styles.searchBarIcons} source={IconUri.CrossIcon} resizeMode={'contain'} />
          </Pressable>) : null
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  searchBar: {
    backgroundColor: Colors.midnightBlue_80,
    flexDirection: 'row',
    borderWidth: RFPercentage(0.1),
    borderRadius: RFPercentage(1),
    borderColor: Colors.lightGrey,
    alignItems: 'center',
    marginHorizontal: RFPercentage(1.5),
    marginBottom: RFPercentage(1),
    overflow: 'hidden',
    // paddingHorizontal: RFPercentage(1),
    paddingRight: RFPercentage(2),
  },
  searchBarIcons: {
    height: RFPercentage(2.5),
    width: RFPercentage(2.5),
    tintColor: Colors.white,
    marginLeft: RFPercentage(1.5)
  },
  searchBarTxt: {
    flex: 1,
    marginLeft: RFPercentage(1.5),
    fontSize: RFPercentage(2),
    color: Colors.white,
    paddingVertical: RFPercentage(1.4),
  },
})

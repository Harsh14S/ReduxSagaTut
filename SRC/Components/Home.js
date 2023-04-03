import { Dimensions, FlatList, Image, Modal, Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../Redux/Actions/Action';
import { RFPercentage } from 'react-native-responsive-fontsize';
import HomeHeader from './HomeHeader';
import { GetProductAction } from '../Redux/Actions/GetProductAction';
import Colors from '../Common/Colors';
import { IconUri } from '../Common/Links';
import { CommonStyles } from '../Common/Style';


export default Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [removeItem, setRemoveItem] = useState({});
  const [preview, setPreview] = useState(false);
  const [imagePreview, setImagePreview] = useState('');

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
                <Text style={styles.headingTxt}>Price: <Text style={styles.txt}>${item.price}</Text></Text>
                <Text style={styles.headingTxt}>Brand: <Text style={styles.txt}>{item.brand}</Text></Text>
                <Text style={styles.headingTxt}>Category: <Text style={styles.txt}>{item.category}</Text></Text>
                <Text style={styles.headingTxt}>Description: <Text style={styles.txt}>{item.description}</Text></Text>
              </View>
              <Pressable style={styles.thumbnailContainer} onPress={() => {
                setImagePreview(item.thumbnail);
                setPreview(!preview)
              }}>
                <Image
                  source={{ uri: item.thumbnail }}
                  style={styles.thumbnail}
                  resizeMode={'contain'}
                />
              </Pressable>
            </View>
            <View style={styles.btnContainers}>
              <Pressable
                style={[styles.btn, { marginRight: RFPercentage(1) }]}
                onPress={() => dispatch(addToCart(item))}
              >
                <Text style={styles.btnTxt}>Add To Cart</Text>
              </Pressable>
              <Pressable
                style={[styles.btn, { marginLeft: RFPercentage(1) }]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setRemoveItem(item);
                }}
              >
                <Text style={styles.btnTxt}>Remove From Cart</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
      <View style={modalStyles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={modalStyles.centeredView}>
            <View style={modalStyles.modalContainer}>
              <Text style={modalStyles.modalText}>Are you sure you want remove this Product from cart?</Text>
              <View style={{ flexDirection: 'row' }}>
                <View style={modalStyles.modalDetailsContainer}>
                  <Text style={modalStyles.modalheadingTxt}>Product: <Text style={modalStyles.modalSubText}>{removeItem.title}</Text></Text>
                  <Text style={modalStyles.modalheadingTxt}>Price: <Text style={modalStyles.modalSubText}>${removeItem.price}</Text></Text>
                  <Text style={modalStyles.modalheadingTxt}>Brand: <Text style={modalStyles.modalSubText}>{removeItem.brand}</Text></Text>
                  <Text style={modalStyles.modalheadingTxt}>Category: <Text style={modalStyles.modalSubText}>{removeItem.category}</Text></Text>
                  <Text style={modalStyles.modalheadingTxt}>Description: <Text style={modalStyles.modalSubText}>{removeItem.description}</Text></Text>
                </View>
                <View style={modalStyles.modalThumbnailContainer}>
                  <Image
                    source={{ uri: removeItem.thumbnail }}
                    style={modalStyles.modalThumbnail}
                    resizeMode={'contain'}
                  />
                </View>
              </View>

              <View style={modalStyles.modalBtnContainers}>
                <Pressable
                  style={modalStyles.modalBtn}

                  onPress={() => {
                    setModalVisible(!modalVisible);
                    dispatch(removeFromCart(removeItem.id));
                  }}
                >
                  <Text style={modalStyles.modalBtnTxt}>Ok</Text>
                </Pressable>
                <Pressable
                  style={modalStyles.modalBtn}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={modalStyles.modalBtnTxt}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={preview}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setPreview(!preview);
          }}>
          <View style={modalStyles.centeredView}>
            <View style={{ backgroundColor: Colors.midnightBlue_80, borderRadius: RFPercentage(2), }}>
              <Pressable><Image style={{ height: RFPercentage(3), width: RFPercentage(3), tintColor: Colors.white }} source={IconUri.CloseIcon} /></Pressable>
              <Image
                source={{ uri: imagePreview }}
                style={{ height: RFPercentage(40), width: RFPercentage(40), margin: RFPercentage(2) }}
                resizeMode={'contain'}
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  )
}

const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: Colors.midnightBlue_80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: RFPercentage(2),
    paddingVertical: RFPercentage(2),
    marginHorizontal: RFPercentage(2),
    borderRadius: RFPercentage(2)
  },
  modalText: {
    fontSize: RFPercentage(2.2),
    color: Colors.white,
    fontWeight: '700',
    marginTop: RFPercentage(0.5),
    marginBottom: RFPercentage(2),
    textAlign: 'center'
  },
  modalBtnContainers: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // marginTop: RFPercentage(1),
  },
  modalBtn: {
    flex: 1,
    marginVertical: RFPercentage(1),
    backgroundColor: Colors.white,
    marginHorizontal: RFPercentage(1),
    paddingVertical: RFPercentage(1.2),
    borderRadius: RFPercentage(1.5),
    alignItems: 'center',
  },
  modalBtnTxt: {
    fontSize: RFPercentage(2),
    color: Colors.midnightBlue_80,
    fontWeight: '800',
  },
  modalThumbnailContainer: {
    backgroundColor: Colors.white,
    borderRadius: RFPercentage(2),
    overflow: 'hidden'
  },
  modalPreviewContainer: {
    backgroundColor: Colors.white,
    borderRadius: RFPercentage(2),
    overflow: 'hidden'
  },
  modalThumbnail: {
    margin: RFPercentage(1),
    height: RFPercentage(18),
    width: RFPercentage(15),
  },
  modalDetailsContainer: {
    flex: 1,
    padding: RFPercentage(0.5),
    justifyContent: 'space-evenly',
  },
  modalheadingTxt: {
    fontWeight: '800',
    color: Colors.white,
    fontSize: RFPercentage(1.6),
  },
  modalSubText: {
    fontWeight: '400',
    color: Colors.white,
    fontSize: RFPercentage(1.6),
  },

})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('screen').width,
    backgroundColor: Colors.white,
    paddingTop: CommonStyles.paddingTop.paddingTop,
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
    // marginHorizontal: RFPercentage(2),
    paddingVertical: RFPercentage(1.5),
    borderRadius: RFPercentage(1.5),
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: RFPercentage(1.6),
    color: Colors.white,
    fontWeight: '700',
  },
  thumbnailContainer: {
    padding: RFPercentage(1),
  },
  thumbnail: {
    height: RFPercentage(18),
    width: RFPercentage(18),
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

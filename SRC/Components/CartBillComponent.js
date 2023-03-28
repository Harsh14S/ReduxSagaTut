import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useSelector } from 'react-redux'
import Colors from '../Common/Colors'

const CartBillComponent = () => {

  const CartData = useSelector((state) => state.CartData);
  const amount = CartData.length && CartData.map(item => item.price).reduce((prev, next) => prev + next);
  const tax = parseInt(amount / 100 * 18);
  const discount = parseInt(amount / 100 * 5);
  const total = amount - discount + tax;

  return (
    <View style={styles.container}>
      <View style={styles.billBox}>
        <Text style={styles.titleTxt}>Amount</Text>
        <Text style={styles.amountTxt}>₹ {amount}</Text>
      </View>
      <View style={styles.billBox}>
        <Text style={styles.titleTxt}>Discount</Text>
        <Text style={styles.amountTxt}>₹ {discount}</Text>
      </View>
      <View style={styles.billBox}>
        <Text style={styles.titleTxt}>Tax</Text>
        <Text style={styles.amountTxt}>₹ {tax}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.billBox}>
        <Text style={styles.titleTxt}>Total</Text>
        <Text style={styles.amountTxt}>₹ {total}</Text>
      </View>
    </View>
  )
}

export default CartBillComponent

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.midnightBlue_80,
    marginVertical: RFPercentage(2),
    marginHorizontal: RFPercentage(3),
    padding: RFPercentage(1.5),
    borderRadius: RFPercentage(1.2)
  },
  billBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: RFPercentage(0.5)
  },
  titleTxt: {
    flex: 4,
    fontSize: RFPercentage(2),
    fontWeight: '700',
    color: Colors.white,
  },
  amountTxt: {
    flex: 1,
    fontSize: RFPercentage(2),
    fontWeight: '500',
    color: Colors.white,
  },
  divider: {
    padding: RFPercentage(0.1),
    backgroundColor: Colors.lightGrey,
    marginVertical: RFPercentage(1),
    borderRadius: RFPercentage(100),
  },
})

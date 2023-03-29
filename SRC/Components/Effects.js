import { useState } from "react"
import { StyleSheet } from 'react-native'

export const decreaseOpacity = () => styles.lowOpacity;
export const increaseOpacity = () => styles.resetOpacity;
export const opacityChange = (bool) => {
  return bool ? decreaseOpacity() : increaseOpacity();
}

const styles = StyleSheet.create({
  lowOpacity: { opacity: 0.5 },
  resetOpacity: { opacity: 1 },
})

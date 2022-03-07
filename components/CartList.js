import { StyleSheet, Text, View } from 'react-native'

const CartList = ({ items }) => {
  return (
    <View>
      <Text>{items.name}</Text>
    </View>
  )
}

export default CartList

const styles = StyleSheet.create({})
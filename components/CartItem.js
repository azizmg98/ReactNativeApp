import { StyleSheet, Text, View } from 'react-native'
import cartStore from '../stores/cartStore'
import CartList from './CartList'

const CartItem = () => {
    const items = cartStore.items.map((items) => <CartList items={items} />)
  return (
    <View>
      <Text>CartItem</Text>
      <Text>{items}</Text>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {observer} from 'mobx-react'

const ShopItem = ({shops, key}) => {
  return (
    <View>
      <Text>{shops.name}</Text>
      {/* <Image style={styles.image} uri={shops.Image} /> */}
    </View>
  )
}

export default observer(ShopItem)

const styles = StyleSheet.create({
    image: {
        width:60,
        height:60
    }
})
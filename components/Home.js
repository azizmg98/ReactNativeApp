import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'
import {observer} from 'mobx-react'

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Button title='Hello'/>
    </View>
  )
}

export default observer(Home)

const styles = StyleSheet.create({})
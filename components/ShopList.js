import { StyleSheet, Text, View, Button } from "react-native";
import shopStore from "../stores/shopStore";
import ShopItem from "./ShopItem";
import { observer } from "mobx-react";

const ShopList = () => {
  const shops = shopStore.shops.map((shops) => (
    <ShopItem key={shops._id} shops={shops} />
  ));
  return (
    <View style={styles.container}>
      <Text>ShopList</Text>
      {shops}
    </View>
  );
};

export default observer(ShopList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

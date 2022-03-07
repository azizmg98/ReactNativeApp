import { StyleSheet, Text, View, Image } from "react-native";
import { baseURL } from "../stores/instance";

const ShopItem = ({ shops }) => {
  const imagePath = shops.image.replace("http://localhost:5000", `${baseURL}`);

  return (
    <View style={styles.container}>
      <Text>{shops.name}</Text>
      <Image
        style={styles.image}
        source={{
          uri: baseURL + shops.Image,
        }}
      />
    </View>
  );
};

export default ShopItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  image: {
    width: 60,
    height: 60,
    flexDirection: "column",
  },
});

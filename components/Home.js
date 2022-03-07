import { NativeBaseProvider, Box } from "native-base";
import { StyleSheet, Text, View, Button } from "react-native";
import ShopList from './ShopList'

const Home = ({ navigation }) => {
  return (
    <View>
        {/* <Text>Home</Text>
        <Button title="Hello this is a test" /> */}
        <ShopList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

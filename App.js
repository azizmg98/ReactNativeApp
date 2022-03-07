import { StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './components/Navigation'
import Home from "./components/Home";
import ShopsList from './components/ShopList'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <NavigationContainer>
        <RootNavigator />
      </NavigationContainer> */}
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
  },
});

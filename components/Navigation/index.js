import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../ShopList";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={Home} />
        <Screen name="ShopList" component={ShopList} />
      </Navigator>
  );
};

export default RootNavigator;
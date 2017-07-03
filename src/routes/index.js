import { HomeScreen } from './Home';
import { LoginScreen } from './Login';
import { StackNavigator } from 'react-navigation';

export const Navigation = StackNavigator(RouteConfigs, StackNavigatorConfig);

const RouteConfigs = {

  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Home'
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Login'
    }
  }
};

const StackNavigatorConfig = {
  initialRouteName: LoginScreen
};

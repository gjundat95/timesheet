import { HomeScreen } from './Home';
import { LoginScreen } from './Login';
import { StackNavigator } from 'react-navigation';

const RouteConfigs = {

  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login'
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home'
    }
  }
};

const StackNavigatorConfig = {
  initialRouteName: 'Login'
};

export const Navigation = StackNavigator(RouteConfigs, StackNavigatorConfig);


import  HomeScreen from '../container/home/HomeContainer';
import  UploadScreen  from './Upload/index';
import  FormScreen  from './Form/index';
import  ListFormScreen  from './Form/ListForm';
import  DetailScreen  from './Form/Detail';
import { StackNavigator } from 'react-navigation';

const RouteConfigs = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      headerLeft: null,
    }
  },
  Upload: {
    screen: UploadScreen,
    navigationOptions: {
      title: 'Upload'
    }
  },
  Form: {
    screen: FormScreen,
   navigationOptions: {
      title: 'Form',
    }
  },
  ListForm: {
    screen: ListFormScreen,
    navigationOptions: {
      title: 'ListForm'
    }
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      title: 'Detail'
    }
  },
};

const StackNavigatorConfig = {
  initialRouteName: 'Home'
};

export const Navigation = StackNavigator(RouteConfigs, StackNavigatorConfig);


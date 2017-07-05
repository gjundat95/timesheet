import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
} from 'react-native';

import LoginContainer from './container/login/LoginContainer';
import { Navigation } from './routes/Router';
import { login, logout } from './actions/action-creator/AuthAction';
import { set, get } from './util/AsyncStore';

class Main extends Component {
    constructor(props) {
        super(props);
        this.checkLogin();
        this.state = {
            loading: true,
        }
    }

    checkLogin = () => {
        get('Key_Login').then(value => {
            this.setState({loading: false});
            if (value === 'true') {
                this.props.login();
            }
        });
    };

    componentWillMount(){
        
    }

    render() {
        if (this.state.loading) {
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            )
        } else {
            if (this.props.authentication === true) {
                return <Navigation />;
            } else {
                return <LoginContainer />;
            }
        }
    }
};

export default connect(
  state => {
    return{
      authentication: state.authentication,
    }
  },
  dispatch => {
      return {
          login: () => dispatch(login()),
          logout: () => dispatch(logout()),
      }
  }
)(Main);



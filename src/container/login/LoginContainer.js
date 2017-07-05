import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../../actions/action-creator/AuthAction';
import { View } from 'react-native';
import LoginView from '../../components/login/LoginView';

class LoginContainer extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <LoginView {...this.props} />
        )
    }
}

export default connect(
  state => {
    return{
      authentication: state.authentication,
    }
  },
  dispatch=>{
      return {
          login: () => dispatch(login()),
          logout: () => dispatch(logout()),
      }
  }
)(LoginContainer);

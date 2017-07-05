import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import HomeView from '../../components/home/HomeView';
import { logout } from '../../actions/action-creator/AuthAction';

class HomeContainer extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <HomeView {...this.props} />
        )
    }
}

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
)(HomeContainer);

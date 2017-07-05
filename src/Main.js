import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
} from 'react-native';

import  Login  from './routes/Login/index';
import  { Navigation }  from './routes/index';

class Main extends Component {
    constructor(props){
        super(props);
    }
    render() {
        if (this.props.authentication === true) {
            return <Navigation />;
        } else {
            return <Login />;
        }
    }
};

export default connect(
    state => {
        return{
            authentication: state.authentication,
        }
    }
)(Main);


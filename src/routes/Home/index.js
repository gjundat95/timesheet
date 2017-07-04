/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,

} from 'react-native';

import * as firebase from '../../config/firebase/index';
import { logout } from '../../config/firebase/auth';
import { set, get } from '../../util/AsyncStore';

export default class Home extends Component {

  constructor(props) {
    super(props);
  };

  componentWillMount() {
    this.checkLogin();
  };

  componentWillReceiveProps() {
    this.checkLogin();
  }

  checkLogin = () => {
    get('Key_Login').then(value => {
      if (value === 'false') {
        this.props.navigation.navigate('Login', {});
      }
    });
  };

  _btnLogout = () => {
    Alert.alert('Logout success');
    logout().then(function (res) {
      logout();
    });
    set('Key_Login', 'false');
    this.componentWillReceiveProps();
  };

  _btnStartImage = () => {
    this.props.navigation.navigate('Upload',{});
    Alert.alert('start database');
    //addImageToDb('2','tinh ngo doan 2 ');
  };

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity
          onPress={this._btnLogout}
        >
          <View style={styles.button}>
            <Text style={styles.textInButton}>Logout</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this._btnStartImage}
        >
          <View style={styles.button}>
            <Text style={styles.textInButton}>Add Image</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=>{
            this.props.navigation.navigate('Form',{});
          }}
        >
          <View style={styles.button}>
            <Text style={styles.textInButton}>Start Form</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#467ac9',
    minWidth: 300,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 5,
  },
  textInButton: {
    color: 'white',
    fontWeight: 'bold'
  },
});


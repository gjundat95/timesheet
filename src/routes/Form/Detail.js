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

export default class Detail extends Component {

  constructor(props) {
    super(props);
  };

  componentWillMount() {
  };

  componentWillReceiveProps() {
  };

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text>Title: {navigation.state.params.title}</Text>
        <Text>Title: {navigation.state.params.age}</Text>
        <Text>Title: {navigation.state.params.address}</Text>
        <Text>Title: {navigation.state.params.job}</Text>

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
  textInButton: {
    color: 'white',
    fontWeight: 'bold'
  },
});


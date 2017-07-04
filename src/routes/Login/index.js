import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { TextInput, Text, View, TouchableOpacity, Alert } from 'react-native';
import { loginAsync, logout } from '../../config/firebase';
import store from '../../store';
import { connect } from 'react-redux';
import { styles } from './styles';

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      account: {
        username: 'hung.bui2@niteco.se',
        password: '123456'
      }
    }
  }

  _changeUsername = username => {
    this.setState({ username});
  };

  _changePassword = password => {
    this.setState({ password});
  }

  _login = () => {

    loginAsync(this.state.account, (res) => {
      if(!res.isSuccess) {
        Alert.alert("ERROR: "+ res.message)
        console.warn(store.getState().authentication);
      } else {
        Alert.alert("Logged In");
        this.props.navigation.navigate('Home',{});
        console.warn(store.getState().authentication);
      }
    })
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.textLogin}>Time Sheet</Text>
          <View style={styles.login}>

            <TextInput
              value={this.state.account.username}
              onChangeText={this._changeUsername}
              style={styles.textInput}
            />
            <TextInput
              value={this.state.account.password}
              onChangeText={this._changePassword}
              style={styles.textInput}
            />

            <TouchableOpacity
              onPress={this._login}
            >
              <View style={styles.button}>
                <Text style={styles.textInButton}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>

      </View>
    )
  }
}

function mapStateToProps(store) {
  return {
    errorState: store.errorState,
    errorMessage: store.errorMessage,
  }
}

function mapDispatchtoProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(LoginScreen);
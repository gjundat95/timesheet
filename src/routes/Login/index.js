import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ImagePicker from 'react-native-image-picker'
import { uploadImage } from '../../config/firebase';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export class LoginScreen extends Component {

  _pickImage() {
    this.setState({ uploadURL: '' })

    ImagePicker.launchImageLibrary({}, response  => {
      uploadImage(response.uri)
        .then(url => this.setState({ uploadURL: url }))
        .catch(error => console.warn(error))
    })
  }

  render() {
    return (
       <View style={ styles.container }>
        <TouchableOpacity onPress={ () => this._pickImage() }>
          <Text style={ styles.upload }>
            Upload
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  upload: {
    textAlign: 'center',
    color: '#333333',
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'gray'
  },
})
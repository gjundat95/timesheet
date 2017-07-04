import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import { uploadImage } from '../../config/firebase';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export class HomeScreen extends Component {
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

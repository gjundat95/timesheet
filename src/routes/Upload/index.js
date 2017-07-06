import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ImagePicker from 'react-native-image-picker'
import { uploadImage } from '../../config/firebase';
import {
  Text, View, StyleSheet,
  TouchableOpacity, Image,
  FlatList,
} from 'react-native';

import { loadAllImages } from '../../config/firebase/database';

export default class Upload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refresh: false,
    }
  }

  componentWillMount() {
    loadAllImages((items) => {
      console.log(items);
      this.setState({ data: items });
    });

  };

  _pickImage() {
    this.setState({ uploadURL: '' })

    ImagePicker.launchImageLibrary({}, response => {
      uploadImage(response.uri)
        .then(url => {
          this.setState({ uploadURL: url })
        })
        .catch(error => console.warn(error))
    });

  };

  refresh() {
    loadAllImages((items) => {
      console.log(items);
      this.setState({ data: items });
    });
  }


  render() {
    return (
      <View style={styles.container}>

        <FlatList

          refreshing={this.state.refresh}
          onRefresh={() => { this.refresh() }}

          data={this.state.data}
          renderItem={({ item }) =>
            <View style={styles.row}>
              <Image
                style={{ width: 250, height: 300 }}
                source={{ uri: item.url }}
              />
            </View>
          }

        //horizontal= {false}
        //numColumns= {3}
        />

        <TouchableOpacity onPress={() => this._pickImage()}>
          <Text style={styles.upload}>
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
    alignItems: 'stretch',
  },
  upload: {
    textAlign: 'center',
    color: '#333333',
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'gray'
  },
  row: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    padding: 30,
  },
})
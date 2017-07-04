import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ImagePicker from 'react-native-image-picker'
import { uploadImage } from '../../config/firebase';
import {
    Text, View, StyleSheet,
    TouchableOpacity, Image,
    FlatList,
} from 'react-native';

import { loadAllPerson } from '../../config/firebase/database';

export default class ListForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refresh: false,
        }
        loadAllPerson((items) => {
            console.log(items);
            this.setState({ data: items });
        });
    }

    componentWillMount() {
 

    };

    refresh() {
        loadAllPerson((items) => {
            console.log(items);
            this.setState({ data: items });
        });
    }


    render() {
        return (
            <View style={styles.container}>

                <FlatList
                    style={{flex:1, }}
                    refreshing={this.state.refresh}
                    onRefresh={() => { this.refresh() }}

                    data={this.state.data}
                    renderItem={({ item }) =>
                        <View style={styles.row}>
                            <Text>Title: {item.title}</Text>
                            <Text>Age: {item.age}</Text>
                            <Text>Address: {item.address}</Text>
                            <Text>Job: {item.job}</Text>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Detail',{...item}) }
                                style={styles.button}
                            >
                                <Text style={styles.textInButton}>
                                    Detials
                                </Text>
                            </TouchableOpacity>
                        </View>
                    }

                //horizontal= {false}
                //numColumns= {3}
                />

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
    row: {
        flex: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        marginTop: 10,
    },
    button: {
        backgroundColor: '#467ac9',
        minWidth: 25,
        minHeight: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 5,
    },
    textInButton: {
        color: 'white',
        fontWeight: 'bold'
    },

})
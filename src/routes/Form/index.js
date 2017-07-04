import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Alert,
} from 'react-native';

import { addInfoToDb } from '../../config/firebase/database';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            age: "",
            address: "",
            job: "",
        };
    }

    _addTask=()=>{
        addInfoToDb({
            title: this.state.title,
            age: this.state.age,
            address: this.state.address,
            job: this.state.job
        },(res)=>{
            console.warn(res);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Add task</Text>
                <View style={styles.subView}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Title"
                        onChangeText={(title) => this.setState({ title })}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Age"
                        onChangeText={(age) => this.setState({ age })}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Address"
                        onChangeText={(address) => this.setState({ address })}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Job"
                        onChangeText={(job) => this.setState({ job })}
                    />
                    <TouchableOpacity
                        onPress={this._addTask}
                    >
                        <View style={styles.button}>
                            <Text style={styles.textButton}>Add Task</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subView: {
        marginTop: 10,
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    textInput: {
        minWidth: 300,
        minHeight: 50,
        padding: 8,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    button: {
        backgroundColor: '#467ac9',
        minWidth: 100,
        minHeight: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 5
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold'
    }
});

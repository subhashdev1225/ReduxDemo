/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';


class Counter extends React.Component {

    //state:

    // Not required as we have created one in reducer APP.JS

    // state = {
    //     counter: 0
    // }


    // //fat arrow function
    // increaseCounter = () => {
    //     this.setState({ counter: this.state.counter + 1 })
    // }

    // decreaseCounter = () => {
    //     this.setState({ counter: this.state.counter - 1 })
    // }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: 300 }}>
                    <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
                        <Text style={{ fontSize: 20, marginTop: 5 }}> Decrease</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30 }}> {this.props.counter} </Text>

                    <TouchableOpacity onPress={() => this.props.increaseCounter()}>
                        <Text style={{ fontSize: 20, marginTop: 5 }}>Increase</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProp(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'I_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'D_COUNTER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Counter)
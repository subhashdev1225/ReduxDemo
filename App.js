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
import CounterClass from './src/Counter';

import { createStore } from 'redux';
import { Provider } from 'react-redux';


const initalState = {
  counter: 0
}
const reducer = (state = initalState, action) => {

  switch (action.type) {
    case 'I_COUNTER':
      return { counter: state.counter + 1 }
    case 'D_COUNTER':
      return { counter: state.counter - 1 }

  }
  return state
}
const store = createStore(reducer)

export default class App extends React.Component {


  render() {
    return (
      <Provider store={store}>
        <CounterClass />
      </Provider>
    );
  }
}
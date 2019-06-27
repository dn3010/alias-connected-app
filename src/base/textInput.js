import React, { Component } from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';
import { colors } from '../constants';

export default class TextInput extends Component {

  render() {
    return <RNTextInput {...this.props} style={[styles.input, this.props.style]}/>
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    fontSize: 16,
  }
});

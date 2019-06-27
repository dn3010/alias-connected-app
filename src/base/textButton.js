import React, { Component } from 'react';
import { View, TouchableNativeFeedback, Text, StyleSheet } from 'react-native';
import { colors } from '../constants';


type Props = {
  text: string;
  onPress: () => void;
}

export default class TextButton extends Component<Props> {

  render() {
    return <TouchableNativeFeedback onPress={this.props.onPress} style={styles.container}>
      <View style={styles.container}>
      <Text style={styles.text}>{this.props.text}</Text>
      </View>
    </TouchableNativeFeedback>
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    paddingVertical: 19,
    paddingHorizontal: 30,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3
  },
  text: {
    color: 'white',
    fontSize: 16,
  }
});

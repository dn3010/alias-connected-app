import React, { Component } from 'react';
import { View, TouchableNativeFeedback, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../constants';


type Props = {
  text: string;
  image;
  selected: boolean;
  onPress: () => void;
}

export default class TextButton extends Component<Props> {

  render() {
    return <TouchableNativeFeedback onPress={this.props.onPress} style={styles.container}>
      <View style={styles.container}>
      <Image src={this.props.image}>
      <Text style={styles.text}>{this.props.text}</Text>
      </View>
    </TouchableNativeFeedback>
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  containerSelected: {

  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  textSelected: {

  },
  image: {
    height: 24,
    width: 24,
  }
});

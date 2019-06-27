import React, { Component } from 'react';
import { View, TouchableNativeFeedback, Text, StyleSheet } from 'react-native';
import { colors } from '../constants';


type Props = {
  title: string;
  subtitle: string;
  selected: boolean;
  onPress: () => void;
}

export default class RadioItem extends Component<Props> {

  render() {
    return <TouchableNativeFeedback onPress={this.props.onPress}>
      <View style={[styles.container, this.props.selected && styles.containerSelected]}>
        <Text style={[styles.text, { fontSize: 20 }]}>{this.props.title}</Text>
        <Text style={[styles.text, { fontSize: 16 }]}>{this.props.subtitle}</Text>
        {this.renderHole()}
      </View>
    </TouchableNativeFeedback>
  }

  renderHole() {
    return <View style={this.props.selected ? styles.selectedHole : styles.hole }/>
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    opacity: 0.8,
    margin: 5,
    height: 145,
    width: 100,
  },
  containerSelected: {
    opacity: 1,
    width: 115,
    backgroundColor: colors.blueOpac,
    borderWidth: 3,
    borderColor: colors.blue,
  },
  text: {
    color: 'white',
  },
  hole: {
    height: 28,
    width: 28,
    borderRadius: 16,
    backgroundColor: colors.blueGrey,
  },
  selectedHole: {
    height: 28,
    width: 28,
    borderRadius: 16,
    backgroundColor: colors.blue,
    borderWidth: 4,
    borderColor: colors.blueGrey,
  }
});

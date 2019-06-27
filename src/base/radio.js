import React, { Component } from 'react';
import { View, TouchableNativeFeedback, Text, StyleSheet, UIManager, LayoutAnimation } from 'react-native';
import { colors } from '../constants';
import RadioItem from './radioItem';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Radio extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
    }
  }

  componenDidMount() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }

  render() {
    return <View style={styles.container}>
      {this.props.config.map((item, index) => {
        return <RadioItem
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          selected={index === this.state.selected}
          onPress={this.selectItem(index)}
        />
      })}
    </View>
  }

  selectItem = (index) => () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({
      selected: index
    }, () => this.props.onSelection && this.props.onSelection(index)
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: -5,
  },
});

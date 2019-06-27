import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import TextInput from '../base/textInput';
import TextButton from '../base/textButton';
import { colors } from '../constants';

export default class MakePayment extends Component {

  constructor(props) {
    super(props);

    this.state = {
      amount: '100',
      to: '',
      from: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Make a payment</Text>
        <Text style={styles.subtitle}>Pay from</Text>
        <TextInput
          placeholder={'example.com'}
          value={this.state.from}
          onChangeText={this.handleInputChange('from')}
        />
        <Text style={styles.subtitle}>Pay to</Text>
        <TextInput
          placeholder={'Bronut'}
          value={this.state.to}
          onChangeText={this.handleInputChange('to')}
        />
        <Text style={styles.subtitle}>Enter amount</Text>
        <TextInput value={this.state.amount} onChangeText={this.handleInputChange('amount')}/>
        <View style={{ height: 17 }}/>
        <TextButton text={'Pay'}/>
      </View>
    );
  }


  handleInputChange = (key) => (value) => {
    this.setState({
      [key]: value
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    marginHorizontal: 18
  },
  title: {
    fontSize: 26
  },
  subtitle: {
    fontSize: 17,
    paddingVertical: 17
  }
});

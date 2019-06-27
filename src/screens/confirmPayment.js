import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import create from "./src/api";
import TextButton from "../base/textButton";

export default class ConfirmPayment extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Finalize Payment</Text>
        <TextButton text={"hello world"} onPress={() => {}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

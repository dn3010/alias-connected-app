import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import TextButton from "../base/textButton";
import ChooseDomain from "./chooseDomain";

export default class Welcome extends Component {
  render() {
    return <ChooseDomain {...this.props}/>;
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>Welcome Screen</Text>
    //     <TextButton text={"hello world"} onPress={() => {}} />
    //   </View>
    // );
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

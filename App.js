/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import create from "./src/api";
import TextButton from "./src/base/textButton";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  componentDidMount() {
    this.createApi();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Sylo Connected App</Text>
        <TextButton text={"hello world"} onPress={() => {}} />
      </View>
    );
  }

  async createApi() {
    try {
      console.log("Creating api");
      const api = await create(
        "wss://rimu.centrality.cloud/ws?apikey=045006ba-7fd4-49e2-bb95-a835e3935cce"
      );

      console.log("Created API");
    } catch (e) {
      console.log("Failed to create API", e);
    }
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

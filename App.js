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
import Welcome from "./src/screens/welcome";
import { of } from "rxjs";
var api = null;

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  constructor() {
    super();
    this.state = { api: null };
  }
  componentDidMount() {
    this.createApi();
  }

  render() {
    if (this.state.api) {
      return (
        <View style={styles.container}>
          <View style={styles.tabContainer}>
            <TextButton text="Pay Sylos" />
            <TextButton text="Pay Sylos" />
          </View>
          <Welcome api={this.state.api} />
        </View>
      );
    }
    return <View />;
  }

  async createApi() {
    try {
      console.log("Creating api");
      const api = await create(
        "wss://rimu.centrality.cloud/ws?apikey=045006ba-7fd4-49e2-bb95-a835e3935cce"
        // "ws://localhost:9944"
      );
      this.setState({ api });
      console.log("Created API");
    } catch (e) {
      console.log("Failed to create API", e);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7F9"
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
  },
  tabContainer: {
    marginTop: 16,
    marginHorizontal: 27,
    flexDirection: "row"
  }
});

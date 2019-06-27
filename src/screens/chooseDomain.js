import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import TextButton from "../base/textButton";
import TextInput from "../base/textInput";
import RadioItem from "../base/radioItem";

export default class ChooseDomain extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.titleText}>Choose Your domain</Text>
        </View>
        <View style={[styles.view, { marginTop: 18 }]}>
          <Text style={styles.walletAddressText}>Enter Wallet address</Text>
        </View>
        <View style={[styles.view, { marginTop: 6 }]}>
          <Text style={styles.address}>0xFAc399E49F5B6867AF1863902WE</Text>
        </View>
        <View style={[styles.view, { marginTop: 35 }]}>
          <Text style={styles.chooseDomainSmall}>Choose domain</Text>
        </View>
        <View style={[styles.view, { marginTop: 17 }]}>
          <TextInput style={{ marginHorizontal: -5, width: "100%" }} />
        </View>
        <View style={[styles.view, { marginTop: 6 }]}>
          <Text style={styles.wowThisDomain}>
            Wow, this can be your new domain
          </Text>
        </View>
        <View
          style={[
            styles.view,
            { marginTop: 25, justifyContent: "space-between" }
          ]}
        >
          <RadioItem title="1 Year" subtitle="100 Sylos" />
          <RadioItem title="2 Year" subtitle="170 Sylos" />
          <RadioItem title="3 Year" subtitle="280 Sylos" />
        </View>

        <View style={[styles.view, { marginTop: 12, width: "100%" }]}>
          <Text style={styles.stealTheDeal}>Steal the deal</Text>
        </View>
        <View style={[styles.view, { marginTop: 11 }]}>
          <Text style={styles.youWillPay}>You will pay</Text>
        </View>
        <View style={[styles.view, { marginTop: 17 }]}>
          <TextInput style={{ marginHorizontal: -5, width: "100%" }} />
        </View>
        <View style={[styles.view, { marginTop: 17 }]}>
          <TextButton
            style={{ marginHorizontal: -5, width: "100%" }}
            text="Pay 170 Sylos"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#F6F7F9"
  },
  welcome: {
    fontSize: 20,

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
  },
  titleText: {
    width: 335,
    height: 35,
    fontFamily: "Montserrat",
    fontSize: 26,
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#24253d"
  },
  view: {
    marginHorizontal: 18,
    flexDirection: "row"
  },
  walletAddressText: {
    fontFamily: "Lato",
    fontSize: 17,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#24253d"
  },
  address: {
    fontFamily: "Rawline",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#21283a"
  },
  chooseDomainSmall: {
    fontFamily: "Lato",
    fontSize: 17,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#24253d"
  },
  wowThisDomain: {
    fontFamily: "RawlineMedium",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#3bb217"
  },
  stealTheDeal: {
    width: "100%",
    fontFamily: "Rawline",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#3389ee",
    justifyContent: "center"
  },
  youWillPay: {
    fontFamily: "Lato",
    fontSize: 17,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#24253d"
  }
});

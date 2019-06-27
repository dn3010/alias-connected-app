import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import TextButton from "../base/textButton";
import TextInput from "../base/textInput";
import Radio from "../base/radio";

export default class ChooseDomain extends Component {

  constructor(props) {
    super(props)

    this.state = {
      domain: '',
      amount: 100,
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.titleText}>Choose Your domain</Text>
        </View>
        <View style={[styles.view, { marginTop: 18 }]}>
          <Text style={styles.walletAddressText}>Your Wallet address</Text>
        </View>
        <View style={[styles.view, { marginTop: 6 }]}>
          <Text style={styles.address}>{this.props.api.getOwnAddress()}</Text>
        </View>
        <View style={[styles.view, { marginTop: 35 }]}>
          <Text style={styles.chooseDomainSmall}>Choose domain</Text>
        </View>
        <View style={[styles.view, { marginTop: 17 }]}>
          <TextInput style={{ width: "100%" }} value={this.state.domain} onChangeText={this.handleDomainChange}/>
        </View>
        <View style={[styles.view, { marginTop: 6 }]}>
          <Text style={styles.wowThisDomain}>
            Wow, this can be your new domain
          </Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
        <Radio
          config={[{ title: '1 Year', subtitle: '100 Sylos'}, { title: '2 Year', subtitle: '170 Sylos'}, { title: '3 Year', subtitle: '280 Sylos'}]}
          onSelection={this.handleAmountSelection}
        />
        </View>

        <View style={[{ marginTop: 12, width: "100%", justifyContent: "center",
    alignItems: 'center',}]}>
          <Text style={styles.stealTheDeal}>Steal the deal</Text>
        </View>
        <TextButton
          style={{ width: "100%", marginTop: 17 }}
          text={`Pay ${this.state.amount} Sylos`}
          onPress={this.handleSubmit}
        />
      </ScrollView>
    );
  }

  handleAmountSelection = (index) => {
    this.setState({ amount: index * 100})
  }

  handleDomainChange = (domain) => {
    this.setState({ domain });
  }


  handleSubmit = async () => {
    console.log('STATE', this.state)

    if (this.props.api) {
      try {
        console.log('GETTING DOMAIN', this.state.domain);
        await this.props.api.createDomain(this.state.domain);
        console.log('SUCCESS!');
      }
      catch(e) {
        console.log('Failed to get domain', e);
      }

    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
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
    fontFamily: "Rawline",
    fontSize: 18,
    color: "#3389ee",
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

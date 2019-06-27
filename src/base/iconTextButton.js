import React, { Component } from "react";
import {
  View,
  TouchableNativeFeedback,
  Text,
  StyleSheet,
  Image
} from "react-native";
import { colors } from "../constants";

type Props = {
  text: string,
  image: any,
  selected: boolean,
  onPress: () => void
};

export default class TextButton extends Component {
  render() {
    const btnStyle = this.props.isSelected
      ? styles.containerSelected
      : styles.container;
    const txtStyle = this.props.isSelected ? styles.textSelected : styles.text;

    return (
      <TouchableNativeFeedback onPress={this.props.onPress} style={btnStyle}>
        <View style={btnStyle}>
          <Image
            style={styles.image}
            tintColor={this.props.isSelected ? colors.grey : colors.blue}
            source={this.props.image}
          />
          <Text style={txtStyle}>{this.props.text}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 37,
    width: "50%",
    borderColor: colors.blue,
    backgroundColor: colors.grey,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },

  containerSelected: {
    height: 37,
    width: "50%",
    borderColor: colors.grey,
    backgroundColor: colors.blue,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  text: {
    color: colors.blue
  },
  textSelected: {
    color: colors.grey
  },
  image: {
    height: 24,
    width: 24,
    margin: 5
  },
  imageSelected: {
    height: 24,
    width: 24
  }
});

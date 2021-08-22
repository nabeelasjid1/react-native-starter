import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import Colors from '../../Styles/Colors';
import Text from '../Text';
import styles from './Styles';

const defaultProps = {
  style: {},
  icon: null,
  outline: false,
  full: false,
  round: false,
  loading: false
};
export default class Button extends Component {
  static defaultProps = defaultProps;
  render() {
    const {
      style,
      styleText,
      icon,
      outline,
      full,
      round,
      loading,
      onPress,
      ...rest
    } = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        {...rest}
        style={StyleSheet.flatten([
          styles.default,
          outline && styles.outline,
          full && styles.full,
          round && styles.round,
          style
        ])}
        activeOpacity={0.9}
      >
        {icon ? icon : null}
        <Text
          style={StyleSheet.flatten([
            styles.textDefault,
            outline && styles.textOuline,
            styleText
          ])}
          numberOfLines={1}
        >
          {this.props.children || "Button"}
        </Text>
        {loading ? (
          <ActivityIndicator
            size="small"
            color={
              outline
                ? Colors.appHeaderColor
                : Colors.White
            }
            style={{ paddingLeft: 5 }}
          />
        ) : null}
      </TouchableOpacity>
    );
  }
}

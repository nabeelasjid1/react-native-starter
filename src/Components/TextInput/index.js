import React, { Component } from "react";
import { View, TextInput, Image, TouchableOpacity } from "react-native";
import Images from "../../Styles/Images";
import styles from "./Styles";

const TextInputComponent = (props) => {
  const {
    // imageSource,
    placeholder,
    changeText,
    secureTextEntry,
    type,
    value,
    styleInput,
    onSubmit,
  } = props;
  return (
    <View style={styles.container}>
      {type == "acc" ? (
        <View style={styles.SectionStyleEdit}>
          <TextInput
            style={styles.textInputWrapper}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            placeholderTextColor="#707070"
            value={value}
            onChangeText={(value) => changeText(value)}
          />
        </View>
      ) : type === "search" ? (
        <View style={styles.SectionStyle1}>
          <View style={styles.borderSeperator} />
          <TextInput
            style={styles.textInputWrapper}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            value={value}
            onChangeText={(value) => changeText(value)}
          />
          <Image source={Images.check} style={styles.inputSearchIcon} />
          <Image source={Images.cross} style={styles.inputSearchIcon1} />
        </View>
      ) : (
        <View style={[styles.SectionStyle, styleInput]}>
          {/* <Image source={Images.check} style={styles.inputIcon} /> */}
          {/* {type !== 'seperator' && <View style={styles.borderSeperator} />} */}
          <TextInput
            style={styles.textInputWrapper}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            placeholderTextColor="#707070"
            value={value}
            // onChangeText={(value) => changeText(value)}
            onChangeText={changeText}
            onSubmitEditing={onSubmit}
            editable={props.edit === false ? false : true}
          />
          <TouchableOpacity onPress={props.IconCallBack}>
            {props.showIcon && (
              <Image source={props.iconSource} style={styles.inputIcon} />
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default TextInputComponent;

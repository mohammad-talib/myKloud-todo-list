import {View, Text, TextInput, StyleSheet, I18nManager} from 'react-native';
import React from 'react';
import colors from '../assets/Colors';

const TextInput_Block = ({onChangeText, value, placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        underlineColorAndroid={colors.blue}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        style={I18nManager.isRTL ? styles.textInput_Ar : styles.textInput_En}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  textInput_En: {
    width: '100%',
    textAlign: 'left',
    fontSize:18
  },
  textInput_Ar: {
    width: '100%',
    textAlign: 'right',
    fontSize:18

  },
});

export default TextInput_Block;

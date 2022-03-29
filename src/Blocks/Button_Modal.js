import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../assets/Colors';

const Button_Modal = ({color, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={{...styles.Text_Button, color: colors[color]}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  Text_Button: {
    fontSize: 15,
    textTransform:"uppercase"
  },
});

export default Button_Modal;

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../assets/Colors';

const ItemSeparator = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grayLight,
  },
});

export default ItemSeparator;

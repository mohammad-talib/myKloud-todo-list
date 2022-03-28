import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../assets/Colors';

const MainHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.TextHeader}>MyKloud list</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: colors.mainColor,
    alignItems: 'flex-start',
  },
  TextHeader: {
    color: colors.white,
    fontSize: 20,
  },
});

export default MainHeader;

import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../assets/Colors';

const Priority_Block = ({item, onPress, selectPriority}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          ...styles.innerContainer,
          borderColor: item.color,
          backgroundColor: item.priority == selectPriority ? item.color : 'transparent',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 15,
  },

  innerContainer: {
    width: 25,
    height: 25,
    borderRadius: 5,
    borderWidth: 2,
  },
});

export default Priority_Block;

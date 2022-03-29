import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import colors from '../assets/Colors';
import {memo} from 'react/cjs/react.production.min';

const ButtonCircle = ({type, onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: type == 1 ? colors.blue : colors.mainColor,
        bottom: type == 2 ? 20 : 100,
      }}>
      <Image
        style={styles.IconAddRemove}
        source={
          type == 1
            ? require('../assets/images/icons/minus.png')
            : require('../assets/images/icons/plus.png')
        }
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 100,
    position: 'absolute',

    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  IconAddRemove: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
});

export default memo(ButtonCircle);

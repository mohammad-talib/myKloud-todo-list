import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../assets/Colors';

const TodoListItem = ({item, selectItem, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.containerFlex}>
        {/* Start Left Checkbox */}
        <View style={styles.todo_Left}>
          <View
            style={{
              ...styles.todo_checkbox,
              borderColor:
                item.priority == 1
                  ? colors.green
                  : item.priority == 2
                  ? colors.blue
                  : colors.mainColor,
              backgroundColor:
                selectItem.id == item.id
                  ? item.priority == 1
                    ? colors.green
                    : item.priority == 2
                    ? colors.blue
                    : colors.mainColor
                  : 'transparent',
            }}>
            {selectItem.id == item.id ? (
              <Image
                style={styles.IconCheck}
                source={require('../assets/images/icons/check.png')}
              />
            ) : null}
          </View>
        </View>
        {/* End Left Checkbox */}

        {/* Start Right Text */}
        <View style={styles.todo_Right}>
          <Text
            style={{
              ...styles.todo_Right_Text,
              color: selectItem.id == item.id ? colors.grayText : colors.black,
              textDecorationLine:
                selectItem.id == item.id ? 'line-through' : 'none',
            }}>
            {item.name}
          </Text>
        </View>
        {/* Start Right Text */}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  containerFlex: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  todo_Left: {
    width: '14%',
  },
  todo_checkbox: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todo_Right: {
    width: '84%',
    alignItems: 'flex-start',
  },
  todo_Right_Text: {
    fontSize: 18,
  },
  IconCheck: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
});
export default TodoListItem;

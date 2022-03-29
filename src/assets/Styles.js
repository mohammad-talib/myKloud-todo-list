import react from 'react';

import {StyleSheet} from 'react-native';
import colors from './Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  },

  // ====================== modal Todo list =================//
  container_body: {
    paddingTop: 15,
    paddingBottom: 15,

  },
  Priority_Text_Box: {
    paddingBottom: 10,
  },
  Priority_Text: {
    fontSize: 14,
    color: colors.grayText,
  },
  Priority_List: {
    flexDirection: 'row',
    alignItems: 'center',
    width:"100%"
  },
  PaddingButton:{
    paddingHorizontal:20
  }
});

export default styles;

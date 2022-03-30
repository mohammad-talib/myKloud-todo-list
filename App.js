import {View, StatusBar, I18nManager} from 'react-native';
import React from 'react';
import styles from './src/assets/Styles';
import colors from './src/assets/Colors';
import ToDoList_Screen from './src/screens/ToDoList_Screen';
// avoid device diraction
I18nManager.allowRTL(false);

export default function App() {
  // =============== End Render Item ================== //
  return (
    <View style={styles.container}>
      {/* Start Status Bar */}
      <StatusBar backgroundColor={colors.statusBarColor} />
      {/* End Status Bar */}
      {/* Start Screen TodoList */}
      <ToDoList_Screen />
      {/* End Screen TodoList */}
    </View>
  );
}

import {
  View,
  Text,
  StyleSheet,
  I18nManager,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from '../assets/Colors';

// Lib
import RNRestart from 'react-native-restart';


const MainHeader = ({languages}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.TextHeader}>{languages.KloudList}</Text>
      </View>
      <TouchableOpacity onPress={async () => {
        if (!I18nManager.isRTL) {

          await I18nManager.forceRTL(true);
          await RNRestart.Restart();
        } else {

          await I18nManager.forceRTL(false);
          await RNRestart.Restart();
        }
      }}>
        <Text style={styles.TextHeaderRight}>
          {!I18nManager.isRTL ? 'AR' : 'EN'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: colors.mainColor,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextHeader: {
    color: colors.white,
    fontSize: 20,
  },
  TextHeaderRight: {
    color: colors.white,
    fontSize: 16,
  },
});

export default MainHeader;

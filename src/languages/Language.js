import {I18nManager} from 'react-native';
import ar from '../languages/ar.json';
import en from '../languages/en.json';
export const Language = () => {
  return I18nManager.isRTL ? ar : en;
};

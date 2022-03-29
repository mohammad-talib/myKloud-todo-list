import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Modal,
  ScrollView,
} from 'react-native';
import colors from '../assets/Colors';

export const Modal_Block = ({isVisible = false, children}) => {
  return (
    <Modal visible={isVisible} transparent={true}>
      {children}
    </Modal>
  );
};

const ModalContainer = ({children}) => (
  <View style={styles.Full_Container}>
    <View style={styles.container}>{children}</View>
  </View>
);

const ModalHeader = ({title}) => (
  <View style={styles.header}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const ModalBody = ({children}) => <View style={styles.body}>{children}</View>;



const ModalFooter = ({children}) => (
  <View style={styles.footer}>{children}</View>
);

const styles = StyleSheet.create({
  Full_Container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingHorizontal:30
  },
  header: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  text: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 22,
    color:colors.black
  },
  body: {
    justifyContent: 'center',
    // minHeight: 20,
  },
  footer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    paddingVertical: 15,
  },
});

Modal_Block.Header = ModalHeader;
Modal_Block.Container = ModalContainer;
Modal_Block.Body = ModalBody;
Modal_Block.Footer = ModalFooter;

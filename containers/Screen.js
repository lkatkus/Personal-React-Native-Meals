import React from 'react';
import { View, StyleSheet } from 'react-native';

const CategoriesScreen = ({ children }) => (
  <View style={styles.screen}>{children}</View>
);
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;

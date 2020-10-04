import React from 'react';
import { View, StyleSheet } from 'react-native';

const CategoriesScreen = ({ children, style }) => (
  <View style={{ ...styles.screen, ...style }}>{children}</View>
);
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default CategoriesScreen;

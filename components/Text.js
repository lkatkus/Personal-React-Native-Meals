import React from 'react';
import { Text, StyleSheet } from 'react-native';

const getTextComponent = (defaultStyle) => ({ children, style }) => (
  <Text style={{ ...defaultStyle, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  body: { fontFamily: 'open-sans' },
});

export default {
  Body: getTextComponent(styles.body),
};

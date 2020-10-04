import React from 'react';
import { Text, StyleSheet } from 'react-native';

const getTextComponent = (defaultStyle) => ({ children, style, ...rest }) => (
  <Text style={{ ...defaultStyle, ...style }} {...rest}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  body: { fontFamily: 'open-sans' },
  title: { fontFamily: 'open-sans-bold', fontSize: 22 },
});

export default {
  Body: getTextComponent(styles.body),
  Title: getTextComponent(styles.title),
};

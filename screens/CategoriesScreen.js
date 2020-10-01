import React from 'react';
import { Button, StyleSheet } from 'react-native';

import { Screen } from '@containers';
import { Text } from '@components';

import { SCREENS } from '@navigation/Navigator.screens';

const CategoriesScreen = ({ navigation }) => {
  return (
    <Screen>
      <Text.Body>CategoriesScreen</Text.Body>
      <Button
        title='Category'
        onPress={() => {
          navigation.navigate({ routeName: SCREENS.CATEGORY });
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default CategoriesScreen;

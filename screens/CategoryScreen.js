import React from 'react';
import { Button, Text, StyleSheet } from 'react-native';

import { Screen } from '@containers';

import { SCREENS } from '@navigation/Navigator.screens';

const CategoryScreen = ({ navigation }) => {
  return (
    <Screen>
      <Text>CategoryScreen</Text>
      <Button
        title='MealDetailsScreen'
        onPress={() => {
          navigation.navigate({ routeName: SCREENS.MEAL_DETAILS });
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default CategoryScreen;

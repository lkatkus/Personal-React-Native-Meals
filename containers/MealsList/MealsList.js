import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { MealItem } from './atoms';

const MealsList = ({ items, clickMealHandler }) => (
  <FlatList
    contentContainerStyle={styles.listContainer}
    data={items}
    renderItem={({ item }) => (
      <MealItem item={item} clickMealHandler={clickMealHandler} />
    )}
  />
);

const styles = StyleSheet.create({
  listContainer: {
    // flexGrow: 1,
    // alignItems: 'center',
  },
});

export default MealsList;

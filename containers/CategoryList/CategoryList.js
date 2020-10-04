import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { CategoryItem } from './atoms';

const CategoryList = ({ categories, clickCategoryHandler }) => (
  <FlatList
    contentContainerStyle={styles.listContainer}
    numColumns={2}
    data={categories}
    renderItem={({ item }) => (
      <CategoryItem item={item} clickCategoryHandler={clickCategoryHandler} />
    )}
  />
);

const styles = StyleSheet.create({
  listContainer: {},
});

export default CategoryList;

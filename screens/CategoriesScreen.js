import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { Screen, CategoryList } from '@containers';
import { SCREENS } from '@navigation/Navigator.screens';

import { HeaderButton } from '@components';

import { CATEGORIES } from './../data/mock';

const CategoriesScreen = ({ navigation }) => {
  return (
    <Screen>
      <CategoryList
        categories={CATEGORIES}
        clickCategoryHandler={(newCategory) => {
          const selectedCategory = CATEGORIES.find(
            ({ id }) => newCategory === id
          );

          return navigation.navigate({
            routeName: SCREENS.CATEGORY,
            params: {
              category: selectedCategory,
            },
          });
        }}
      />
    </Screen>
  );
};

CategoriesScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Meal categories',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={navigation.toggleDrawer}
        />
      </HeaderButtons>
    ),
  };
};

export default CategoriesScreen;

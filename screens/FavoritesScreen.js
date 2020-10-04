import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { Screen, MealsList } from '@containers';
import { HeaderButton } from '@components';
import { SCREENS } from '@navigation/Navigator.screens';

import { MEALS } from './../data/mock';

const FavoritesScreen = ({ navigation }) => {
  return (
    <Screen>
      <MealsList
        items={MEALS}
        clickMealHandler={(meal) =>
          navigation.navigate({
            routeName: SCREENS.MEAL_DETAILS,
            params: {
              meal: meal,
            },
          })
        }
      />
    </Screen>
  );
};

FavoritesScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Your Favorites',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title='Menu'
        iconName='ios-menu'
        onPress={navigation.toggleDrawer}
      />
    </HeaderButtons>
  ),
});

export default FavoritesScreen;

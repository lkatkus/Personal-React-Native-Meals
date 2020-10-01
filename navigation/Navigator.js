import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  CategoriesScreen,
  CategoryScreen,
  FavoritesScreen,
  FiltersScreen,
  MealDetailsScreen,
} from './../screens';

import { SCREENS } from './Navigator.screens';

const Navigator = createStackNavigator(
  {
    [SCREENS.CATEGORIES]: CategoriesScreen,
    [SCREENS.CATEGORY]: CategoryScreen,
    [SCREENS.FAVORITES]: FavoritesScreen,
    [SCREENS.FILTERS]: FiltersScreen,
    [SCREENS.MEAL_DETAILS]: MealDetailsScreen,
  },
  { initialRouteName: SCREENS.CATEGORIES }
);

export default createAppContainer(Navigator);

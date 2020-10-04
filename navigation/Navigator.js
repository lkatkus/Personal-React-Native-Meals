import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import { colors } from '@constants';

import { SCREENS } from './Navigator.screens';
import {
  CategoriesScreen,
  CategoryScreen,
  FavoritesScreen,
  FiltersScreen,
  MealDetailsScreen,
} from './../screens';

const isAndroid = Platform.OS === 'android';

const MealsNavigator = createStackNavigator(
  {
    [SCREENS.CATEGORIES]: CategoriesScreen,
    [SCREENS.CATEGORY]: CategoryScreen,
    [SCREENS.MEAL_DETAILS]: MealDetailsScreen,
  },
  {
    initialRouteName: SCREENS.CATEGORIES,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: isAndroid && colors.primary,
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
      },
      headerBackTitleStyle: {
        fontFamily: 'open-sans',
      },
      headerTintColor: isAndroid ? 'white' : colors.primary,
    },
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    [SCREENS.FAVORITES]: FavoritesScreen,
    [SCREENS.MEAL_DETAILS]: MealDetailsScreen,
  },
  {
    initialRouteName: SCREENS.FAVORITES,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: isAndroid && colors.secondary,
      },
      headerTintColor: isAndroid ? 'white' : colors.secondary,
    },
  }
);

const FiltersNavigator = createStackNavigator(
  {
    [SCREENS.FILTERS]: FiltersScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: isAndroid && colors.secondary,
      },
      headerTintColor: isAndroid ? 'white' : colors.secondary,
    },
  }
);

const createTabNavigator = isAndroid
  ? createMaterialBottomTabNavigator
  : createBottomTabNavigator;

const tabBarOptions = isAndroid
  ? {
      activeColor: 'white',
      shifting: true,
    }
  : {
      tabBarOptions: {
        activeTintColor: colors.secondary,
      },
    };

const TabNavigator = createTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
        ),
        tabBarColor: colors.primary,
      },
    },
    Favorites: {
      screen: FavoritesNavigator,
      navigationOptions: {
        tabBarLabel: 'Favorites!',
        tabBarIcon: (tabInfo) => (
          <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
        ),
        tabBarColor: colors.secondary,
      },
    },
  },
  tabBarOptions
);

const MainNavigator = createDrawerNavigator(
  {
    Meals: {
      screen: TabNavigator,
      navigationOptions: {
        title: 'Meals & Favorites',
      },
    },
    Filters: {
      screen: FiltersNavigator,
      navigationOptions: {
        title: 'Filters',
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: colors.secondary,
    },
  }
);

export default createAppContainer(MainNavigator);

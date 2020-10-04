import React from 'react';

import { Screen, MealsList } from '@containers';
import { SCREENS } from '@navigation/Navigator.screens';

import { MEALS } from './../data/mock';

const CategoryScreen = ({ navigation }) => {
  const selectedCategory = navigation.getParam('category');
  const categoryMeals = MEALS.filter((meal) =>
    meal.categoryId.includes(selectedCategory.id)
  );

  return (
    <Screen>
      <MealsList
        items={categoryMeals}
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

CategoryScreen.navigationOptions = ({ navigation }) => {
  const selectedCategory = navigation.getParam('category');

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: selectedCategory.color,
    },
  };
};

export default CategoryScreen;

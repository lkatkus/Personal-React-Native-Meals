import React from 'react';
import { useSelector } from 'react-redux';

import { Screen, MealsList } from '@containers';
import { Text } from '@components';
import { SCREENS } from '@navigation/Navigator.screens';

const CategoryScreen = ({ navigation }) => {
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const selectedCategory = navigation.getParam('category');
  const categoryMeals = availableMeals.filter((meal) =>
    meal.categoryId.includes(selectedCategory.id)
  );
  const hasMeals = categoryMeals.length > 0;

  return (
    <Screen
      style={!hasMeals && { alignItems: 'center', justifyContent: 'center' }}
    >
      {hasMeals ? (
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
      ) : (
        <Text.Body>You have no favorite meals yet.</Text.Body>
      )}
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

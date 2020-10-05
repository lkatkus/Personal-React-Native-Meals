import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { Screen, MealsList } from '@containers';
import { HeaderButton, Text } from '@components';
import { SCREENS } from '@navigation/Navigator.screens';

const FavoritesScreen = ({ navigation }) => {
  const availableMeals = useSelector((state) => state.meals.favoriteMeals);
  const hasFavorites = availableMeals.length > 0;

  return (
    <Screen
      style={!hasFavorites && { alignItems: 'center', justifyContent: 'center' }}
    >
      {hasFavorites ? (
        <MealsList
          items={availableMeals}
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

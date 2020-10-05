import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { StyleSheet, ScrollView, Image, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { Screen } from '@containers';
import { HeaderButton, Text } from '@components';

import { toggleFavorite } from './../store/actions';

const MealDetailsScreen = ({ navigation }) => {
  const selectedMeal = navigation.getParam('meal');
  const isFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === selectedMeal.id)
  );

  const dispatch = useDispatch();

  const toggleFavoriteHandler = React.useCallback(() => {
    dispatch(toggleFavorite(selectedMeal.id));
  }, [dispatch, selectedMeal]);

  React.useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  React.useEffect(() => {
    navigation.setParams({ isFav: isFavorite });
  }, [isFavorite]);

  return (
    <Screen>
      <ScrollView>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <View style={styles.details}>
          <Text.Body>{selectedMeal.duration} mins</Text.Body>
          <Text.Body>{selectedMeal.complexity.toUpperCase()}</Text.Body>
          <Text.Body>{selectedMeal.affordability.toUpperCase()}</Text.Body>
        </View>
        <View style={styles.listContainer}>
          <Text.Title>Ingredients</Text.Title>
          {selectedMeal.ingredients.map((ingredient, index) => (
            <Text.Body key={`ingredient-${index}`} style={{ marginBottom: 5 }}>
              {ingredient}
            </Text.Body>
          ))}
        </View>
        <View style={styles.listContainer}>
          <Text.Title>Steps</Text.Title>
          {selectedMeal.steps.map((step, index) => (
            <Text.Body key={`step-${step}`} style={{ marginBottom: 5 }}>
              {index + 1}. {step}
            </Text.Body>
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
  },
  listContainer: {
    padding: 10,
  },
});

MealDetailsScreen.navigationOptions = ({ navigation }) => {
  const selectedMeal = navigation.getParam('meal');
  const isFav = navigation.getParam('isFav');
  const toggleFav = navigation.getParam('toggleFav');

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Favorite'
          iconName={isFav ? 'ios-star' : 'ios-star-outline'}
          onPress={toggleFav}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetailsScreen;

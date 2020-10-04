import React from 'react';
import { StyleSheet, ScrollView, Image, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { Screen } from '@containers';
import { HeaderButton, Text } from '@components';

const MealDetailsScreen = ({ navigation, ...rest }) => {
  const selectedMeal = navigation.getParam('meal');

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

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Favorite'
          iconName='ios-star'
          onPress={() => alert('Mark as favorite')}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetailsScreen;

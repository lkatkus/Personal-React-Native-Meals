import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  ImageBackground,
  Platform,
} from 'react-native';

import { Text } from '@components';

const CategoryItem = ({ item, clickMealHandler }) => {
  const TouchableComponent =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  return (
    <TouchableComponent onPress={() => clickMealHandler(item)}>
      <View style={styles.itemWrapper}>
        <View style={styles.titleContainer}>
          <ImageBackground style={styles.image} source={{ uri: item.imageUrl }}>
            <Text.Title style={styles.title}>{item.title}</Text.Title>
          </ImageBackground>
        </View>
        <View style={styles.descriptionContainer}>
          <Text.Body>{item.duration} mins</Text.Body>
          <Text.Body>{item.complexity.toUpperCase()}</Text.Body>
          <Text.Body>{item.affordability.toUpperCase()}</Text.Body>
        </View>
      </View>
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    margin: 10,
    backgroundColor: '#e1e1e1',
    borderRadius: 10,
    overflow: 'hidden',
  },
  titleContainer: {
    height: 200,
  },
  title: {
    padding: 10,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  descriptionContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CategoryItem;

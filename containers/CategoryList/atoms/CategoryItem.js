import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

import { Text } from '@components';

const CategoryItem = ({ item, clickCategoryHandler }) => {
  const TouchableComponent =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  return (
    <View style={styles.itemWrapper}>
      <TouchableComponent
        style={{ flex: 1 }}
        onPress={() => clickCategoryHandler(item.id)}
      >
        <View style={{ ...styles.itemContainer, backgroundColor: item.color }}>
          <Text.Title numberOfLines={2} style={{ textAlign: 'right' }}>
            {item.title}
          </Text.Title>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  itemContainer: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    shadowRadius: 10,
  },
});

export default CategoryItem;

import React from 'react';
import { View, Switch, StyleSheet } from 'react-native';

import { colors } from '@constants';

import Text from './Text';

const FilterSwitch = ({ title, changeHandler }) => {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <View style={styles.filterContainer}>
      <Text.Body>{title}</Text.Body>
      <Switch
        value={isSelected}
        onValueChange={(newState) => {
          setIsSelected(newState);
          changeHandler(newState);
        }}
        trackColor={{ true: colors.secondary }}
        thumbColor={colors.secondary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10
  },
});

export default FilterSwitch;

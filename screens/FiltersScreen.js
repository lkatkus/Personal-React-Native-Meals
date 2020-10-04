import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { Screen } from '@containers';
import { HeaderButton, Text, FilterSwitch } from '@components';

const FiltersScreen = ({ navigation }) => {
  const [filterState, setFilterState] = React.useState({
    isGlutenFree: false,
    isLactoseFree: false,
    isVegan: false,
    isVegetarian: false,
  });

  const stateChangeHandler = (key) => (newState) => {
    setFilterState({
      ...filterState,
      [key]: newState,
    });
  };

  const saveFilters = React.useCallback(() => {
    const appliedFilters = {
      ...filterState,
    };

    console.log(appliedFilters);
  }, [filterState]);

  React.useEffect(() => {
    navigation.setParams({ saveFilters });
  }, [filterState]);

  return (
    <Screen style={{ alignItems: 'center', padding: 20 }}>
      <Text.Title>Available Filters</Text.Title>
      <FilterSwitch
        title='Gluten-free'
        changeHandler={stateChangeHandler('isGlutenFree')}
      />
      <FilterSwitch
        title='Lactose-free'
        changeHandler={stateChangeHandler('isLactoseFree')}
      />

      <FilterSwitch
        title='Vegan'
        changeHandler={stateChangeHandler('isVegan')}
      />
      <FilterSwitch
        title='Vegetarian'
        changeHandler={stateChangeHandler('isVegetarian')}
      />
    </Screen>
  );
};

FiltersScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title='Menu'
        iconName='ios-menu'
        onPress={navigation.toggleDrawer}
      />
    </HeaderButtons>
  ),
  headerTitle: 'Filter Meals',
  // headerRight: () => (
  //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
  //     <Item
  //       title='Menu'
  //       iconName='ios-save'
  //       onPress={navigation.getParam('saveFilters')}
  //     />
  //   </HeaderButtons>
  // ),
});

export default FiltersScreen;

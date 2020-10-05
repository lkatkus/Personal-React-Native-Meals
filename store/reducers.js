import { MEALS } from './../data/mock';
import { TOGGLE_FAVORITE, SET_FILTERS } from './actions';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.payload.mealId
      );

      if (existingIndex >= 0) {
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.filter(
            (meal) => meal.id !== action.payload.mealId
          ),
        };
      } else {
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(
            state.meals.find((meal) => meal.id === action.payload.mealId)
          ),
        };
      }
    case SET_FILTERS:
      const {
        isGlutenFree,
        isLactoseFree,
        isVegan,
        isVegetarian,
      } = action.payload.filters;

      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (isGlutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (isLactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (isVegan && !meal.isVegan) {
          return false;
        }
        if (isVegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });

      return {
        ...state,
        filteredMeals: updatedFilteredMeals,
      };
    default:
      return state;
  }
};

export default mealsReducer;

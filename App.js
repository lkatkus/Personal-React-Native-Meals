import React from 'react';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';

import Navigator from './navigation/Navigator';
import mealsReducer from './store/reducers';

enableScreens();

const rootReducer = combineReducers({ meals: mealsReducer });
const store = createStore(rootReducer, composeWithDevTools());

const fetchFonts = () =>
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

const App = () => {
  const [loaded, setLoaded] = React.useState(false);

  if (!loaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <React.Fragment>
        <StatusBar style='auto' />
        <Navigator />
      </React.Fragment>
    </Provider>
  );
};

export default App;

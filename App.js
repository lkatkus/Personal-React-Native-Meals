import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import Navigator from './navigation/Navigator';

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

  return <Navigator />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

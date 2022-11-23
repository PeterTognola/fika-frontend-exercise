import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { Main } from './navigation';
import { store } from './store';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
  roundness: 0,
};

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <StatusBar style="auto" />
          <NavigationContainer>
            <Main />
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </>
  );
}

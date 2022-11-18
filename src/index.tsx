import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { Main } from './navigation';
import { store } from './store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PaperProvider>
          <StatusBar style="auto" />
          <NavigationContainer>
            <Main />
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </>
  );
}

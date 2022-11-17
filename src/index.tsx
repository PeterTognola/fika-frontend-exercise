import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import { Main } from './navigation/Main';

export default function App() {
    return (
        <>
            <PaperProvider>
                <StatusBar style="auto"/>
                <NavigationContainer>
                    <Main/>
                </NavigationContainer>
            </PaperProvider>
        </>
    );
}

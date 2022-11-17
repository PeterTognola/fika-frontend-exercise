import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Films } from '../screens/Films';

export type MainStackParams = {
  Films: typeof Films;
};

const MainStack = createStackNavigator<MainStackParams>();

export const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Films" component={Films} />
  </MainStack.Navigator>
);

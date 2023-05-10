import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePage} from './HomePage';
import {HistoryPage} from './HistoryPage';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="History" component={HistoryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

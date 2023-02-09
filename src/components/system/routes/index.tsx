import React, { FC } from 'react';

// NAVIGATOR
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoutesType } from 'model/router';

// ROUTES
import Home from 'components/pages/Home';
import Login from 'components/pages/Login';

const Stack = createNativeStackNavigator<RoutesType>();

const Routes: FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;

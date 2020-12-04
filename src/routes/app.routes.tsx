import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Profile from '../pages/Profile';

export type NavigationProps = {
  Home: undefined;
  Profile: {
    index: number;
  };
};

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator screenOptions={{ headerShown: false }}>
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Profile" component={Profile} />
  </App.Navigator>
);

export default AppRoutes;

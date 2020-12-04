import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import Theme from './styles/theme/default';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <Theme>
      <NavigationContainer>
        <AppProvider>
          <Routes />
        </AppProvider>
      </NavigationContainer>
    </Theme>
  );
};

export default App;

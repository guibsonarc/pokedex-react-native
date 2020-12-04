import React from 'react';

import { PokemonProvider } from './pokemon.hook';

const AppProvider: React.FC = ({ children }) => (
  <PokemonProvider>{children}</PokemonProvider>
);

export default AppProvider;

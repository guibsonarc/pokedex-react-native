import React, { createContext, useCallback, useState, useContext } from 'react';

import PokemonModel from '../models/pokemon.model';
import PokemonService from '../services/pokemon.services';
import PokemonRepository from '../repositories/pokemon.repository';

interface PokemonContextData {
  pokemons: Array<PokemonModel>;
  loading: boolean;
  getAllPokemons(): Promise<void>;
  getPokemonDetails(index: number): Promise<void>;
}

const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData,
);

const PokemonProvider: React.FC = ({ children }) => {
  const [pokemons, setPokemons] = useState<Array<PokemonModel>>([]);
  const [loading, setLoading] = useState(true);
  const service = new PokemonService(new PokemonRepository());

  const getAllPokemons = useCallback(async () => {
    setLoading(true);

    const response = await service.getAllPokemons();

    setPokemons(response);
    setLoading(false);
  }, []);

  const getPokemonDetails = useCallback(
    async index => {
      setLoading(true);

      const response = await service.getPokemonDetails(pokemons[index]);

      const newPokemons = pokemons;
      newPokemons[index] = response;

      setPokemons(newPokemons);
      setLoading(false);
    },
    [pokemons],
  );

  return (
    <PokemonContext.Provider
      value={{ pokemons, loading, getAllPokemons, getPokemonDetails }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

function usePokemon(): PokemonContextData {
  const context = useContext(PokemonContext);

  return context;
}

export { PokemonProvider, usePokemon };

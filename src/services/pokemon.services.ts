import PokemonModel from '../models/pokemon.model';
import PokemonRepository from '../repositories/pokemon.repository';

interface PokemonServiceInterface {
  repository: PokemonRepository;
  getAllPokemons(): Promise<Array<PokemonModel>>;
  getPokemonDetails(pokemon: PokemonModel): Promise<PokemonModel>;
}

export default class PokemonService implements PokemonServiceInterface {
  repository: PokemonRepository;

  constructor(repository: PokemonRepository) {
    this.repository = repository;
  }

  async getAllPokemons(): Promise<PokemonModel[]> {
    const pokemonNames = await this.repository.getAllPokemons(60);
    const pokemons: Array<PokemonModel> = [];

    for (let i = 0; i < pokemonNames.length; i += 1) {
      const response = await this.repository.getPokemonData(pokemonNames[i]);

      pokemons.push(response);
    }

    return pokemons;
  }

  async getPokemonDetails(pokemon: PokemonModel): Promise<PokemonModel> {
    const pokemonSpecies = await this.repository.getPokemonSpecies(pokemon.id);

    const pokemonTypes = await this.repository.getPokemonTypes(
      pokemon.types[0],
    );

    const pokemonEvolution = await this.repository.getPokemonEvolution(
      pokemonSpecies.evolutionChain,
    );

    const newPokemon = pokemon;
    newPokemon.species = pokemonSpecies;
    newPokemon.typesDamage = pokemonTypes;
    newPokemon.evolution = pokemonEvolution;

    return newPokemon;
  }
}

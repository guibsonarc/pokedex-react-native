export default class PokemonEvolutionModel {
  pokemonIdFrom: number;

  pokemonNameFrom: string;

  pokemonImageFrom: string;

  level: number;

  pokemonIdTo: number;

  pokemonNameTo: string;

  pokemonImageTo: string;

  constructor(
    pokemonIdFrom: number,
    pokemonNameFrom: string,
    pokemonImageFrom: string,
    level: number,
    pokemonIdTo: number,
    pokemonNameTo: string,
    pokemonImageTo: string,
  ) {
    this.pokemonIdFrom = pokemonIdFrom;
    this.pokemonNameFrom = pokemonNameFrom;
    this.pokemonImageFrom = pokemonImageFrom;
    this.level = level;
    this.pokemonIdTo = pokemonIdTo;
    this.pokemonNameTo = pokemonNameTo;
    this.pokemonImageTo = pokemonImageTo;
  }
}

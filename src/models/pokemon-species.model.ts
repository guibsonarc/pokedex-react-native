export default class PokemonSpeciesModel {
  species: string;

  catchRate: number;

  baseFriendship: number;

  growthRate: string;

  maleGender: number;

  femaleGender: number;

  eggGroups: Array<string>;

  eggCycles: number;

  evolutionChain: string;

  constructor(
    species: string,
    catchRate: number,
    baseFriendship: number,
    growthRate: string,
    maleGender: number,
    femaleGender: number,
    eggGroups: Array<string>,
    eggCycles: number,
    evolutionChain: string,
  ) {
    this.species = species;
    this.catchRate = catchRate;
    this.baseFriendship = baseFriendship;
    this.growthRate = growthRate;
    this.maleGender = maleGender;
    this.femaleGender = femaleGender;
    this.eggGroups = eggGroups;
    this.eggCycles = eggCycles;
    this.evolutionChain = evolutionChain;
  }
}

import PokemonEvolutionModel from './pokemon-evolution.model';
import PokemonSpeciesModel from './pokemon-species.model';
import PokemonTypesModel from './pokemon-types.model';

export default class PokemonModel {
  id: number;

  order: number;

  name: string;

  image: string;

  types: Array<string>;

  height: number;

  weight: number;

  abilities: Array<string>;

  hp: number;

  attack: number;

  defense: number;

  specialAttack: number;

  specialDefense: number;

  speed: number;

  evYield: number;

  baseExp: number;

  species?: PokemonSpeciesModel;

  typesDamage?: PokemonTypesModel;

  evolution?: Array<PokemonEvolutionModel>;

  constructor(
    id: number,
    order: number,
    name: string,
    image: string,
    types: Array<string>,
    height: number,
    weight: number,
    abilities: Array<string>,
    hp: number,
    attack: number,
    defense: number,
    specialAttack: number,
    specialDefense: number,
    speed: number,
    evYield: number,
    baseExp: number,
  ) {
    this.id = id;
    this.order = order;
    this.name = name;
    this.image = image;
    this.types = types;
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.specialAttack = specialAttack;
    this.specialDefense = specialDefense;
    this.speed = speed;
    this.evYield = evYield;
    this.baseExp = baseExp;
  }
}

import axios from 'axios';

import PokemonEvolutionModel from '../models/pokemon-evolution.model';
import PokemonSpeciesModel from '../models/pokemon-species.model';
import PokemonTypesModel from '../models/pokemon-types.model';
import PokemonModel from '../models/pokemon.model';
import api from '../services/api.services';
import { getPokemonImageUrl, toFirstUpperCase } from '../utils/functions';

interface PokemonRepositoryInterface {
  getAllPokemons(limit: number): Promise<Array<string>>;
  getPokemonData(name: string): Promise<PokemonModel>;
  getPokemonSpecies(id: number): Promise<PokemonSpeciesModel>;
  getPokemonTypes(name: string): Promise<PokemonTypesModel>;
  getPokemonEvolution(url: string): Promise<Array<PokemonEvolutionModel>>;
}

export default class PokemonRepository implements PokemonRepositoryInterface {
  async getAllPokemons(limit: number): Promise<string[]> {
    const response = await api.get(`/pokemon?limit=${limit}&offset=0`);
    const data: string[] = [];
    response.data.results.map((e: any) => data.push(e.name));
    return data;
  }

  async getPokemonData(name: string): Promise<PokemonModel> {
    const { data } = await api.get(`/pokemon/${name}/`);
    const types: string[] = [];
    data.types.map((e: any) => types.push(e.type.name));

    const abilities: string[] = [];
    data.abilities.map((e: any) => abilities.push(e.ability.name));

    let evYield = 0;
    data.stats.map((e: any) => {
      evYield += e.effort;
    });

    return new PokemonModel(
      data.id,
      data.order,
      toFirstUpperCase(data.species.name),
      getPokemonImageUrl(data.id),
      types,
      data.height,
      data.weight,
      abilities,
      data.stats[0].base_stat,
      data.stats[1].base_stat,
      data.stats[2].base_stat,
      data.stats[3].base_stat,
      data.stats[4].base_stat,
      data.stats[4].base_stat,
      evYield,
      data.base_experience,
    );
  }

  async getPokemonSpecies(id: number): Promise<PokemonSpeciesModel> {
    const { data } = await api.get(`/pokemon-species/${id}/`);
    const eggGroups: string[] = [];
    data.egg_groups.map((e: any) => eggGroups.push(e.name));

    const femaleGender = (data.gender_rate / 8) * 100;
    const maleGender = 100 - femaleGender;

    return new PokemonSpeciesModel(
      data.genera[7].genus,
      data.capture_rate,
      data.base_happiness,
      data.growth_rate.name,
      maleGender,
      femaleGender,
      eggGroups,
      data.hatch_counter,
      data.evolution_chain.url,
    );
  }

  async getPokemonTypes(name: string): Promise<PokemonTypesModel> {
    const { data } = await api.get(`/type/${name}/`);
    const doubleDamage: string[] = [];
    data.damage_relations.double_damage_from.map((e: any) =>
      doubleDamage.push(e.name),
    );

    const halfDamage: string[] = [];
    data.damage_relations.half_damage_from.map((e: any) =>
      halfDamage.push(e.name),
    );

    return new PokemonTypesModel(doubleDamage, halfDamage);
  }

  async getPokemonEvolution(url: string): Promise<PokemonEvolutionModel[]> {
    const { data } = await axios.get(url);

    const chain: PokemonEvolutionModel[] = [];

    let pokemonStart = data.chain.species.name;
    let evolvesTo = data.chain.evolves_to[0];

    while (evolvesTo) {
      const pokemonFrom = await this.getPokemonData(pokemonStart);
      const level = evolvesTo.evolution_details[0].min_level;
      const pokemonTo = await this.getPokemonData(evolvesTo.species.name);
      pokemonStart = evolvesTo.species.name;
      evolvesTo = evolvesTo.evolves_to[0];

      chain.push(
        new PokemonEvolutionModel(
          pokemonFrom.id,
          pokemonFrom.name,
          pokemonFrom.image,
          level,
          pokemonTo.id,
          pokemonTo.name,
          pokemonTo.image,
        ),
      );
    }

    return chain;
  }
}

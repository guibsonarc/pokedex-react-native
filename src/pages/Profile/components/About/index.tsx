import React, { memo } from 'react';
import PokemonModel from '../../../../models/pokemon.model';

import { Container, Description, Title, Item, Key, Value } from './styles';

import { toFirstUpperCase } from '../../../../utils/functions';

interface Props {
  pokemon: PokemonModel;
}

const About: React.FC<Props> = ({ pokemon }) => {
  return (
    <Container>
      <Description>
        This is the main data you need to know about Bulbasaur, take advantage
        of Pokédex.
      </Description>
      <Title type={pokemon.types[0]}>Pokédex Data</Title>
      <Item>
        <Key>Species</Key>
        <Value>{pokemon.species?.species}</Value>
      </Item>
      <Item>
        <Key>Height</Key>
        <Value>{`${pokemon.height / 10}m`}</Value>
      </Item>
      <Item>
        <Key>Weight</Key>
        <Value>{`${pokemon.weight / 10}kg`}</Value>
      </Item>
      <Item>
        <Key>Abilities</Key>
        <Value>{`1. ${toFirstUpperCase(pokemon.abilities[0])}`}</Value>
      </Item>

      <Title type={pokemon.types[0]}>Training</Title>
      <Item>
        <Key>EV Yield</Key>
        <Value>{pokemon.evYield}</Value>
      </Item>
      <Item>
        <Key>Catch Rate</Key>
        <Value>{pokemon.species?.catchRate}</Value>
      </Item>
      <Item>
        <Key>Base Friendship</Key>
        <Value>{pokemon.species?.baseFriendship}</Value>
      </Item>
      <Item>
        <Key>Base Exp</Key>
        <Value>{pokemon.baseExp}</Value>
      </Item>
      <Item>
        <Key>Growth Rate</Key>
        <Value>{pokemon.species?.growthRate}</Value>
      </Item>

      <Title type={pokemon.types[0]}>Breeding</Title>
      <Item>
        <Key>Gender</Key>
        <Value>{`♀ ${pokemon.species?.maleGender}%, ♂ ${pokemon.species?.femaleGender}%`}</Value>
      </Item>
      <Item>
        <Key>Egg Groups</Key>
        <Value>{pokemon.species?.eggGroups[0]}</Value>
      </Item>
      <Item>
        <Key>Egg Cycles</Key>
        <Value>
          {`${pokemon.species?.eggCycles} (${
            pokemon.species?.eggCycles === undefined
              ? 0
              : pokemon.species?.eggCycles * 255
          } steps)`}
        </Value>
      </Item>
    </Container>
  );
};

export default memo(About);

import React, { memo } from 'react';

import {
  Container,
  Title,
  Item,
  Key,
  Value,
  BarChart,
  ProgressBar,
  Description,
  TypesInfo,
  MaxText,
} from './styles';

import PokemonModel from '../../../../models/pokemon.model';

interface Props {
  pokemon: PokemonModel;
}

const Stats: React.FC<Props> = ({ pokemon }) => {
  return (
    <Container>
      <Title type={pokemon.types[0]}>Base Stats</Title>
      <Item>
        <Key>HP</Key>
        <Value>{pokemon.hp}</Value>
        <BarChart>
          <ProgressBar value={pokemon.hp} type={pokemon.types[0]} />
        </BarChart>
        <Value>252</Value>
      </Item>
      <Item>
        <Key>Attack</Key>
        <Value>{pokemon.attack}</Value>
        <BarChart>
          <ProgressBar value={pokemon.attack} type={pokemon.types[0]} />
        </BarChart>
        <Value>252</Value>
      </Item>
      <Item>
        <Key>Defense</Key>
        <Value>{pokemon.defense}</Value>
        <BarChart>
          <ProgressBar value={pokemon.defense} type={pokemon.types[0]} />
        </BarChart>
        <Value>252</Value>
      </Item>
      <Item>
        <Key>Sp. Atk</Key>
        <Value>{pokemon.specialAttack}</Value>
        <BarChart>
          <ProgressBar value={pokemon.specialAttack} type={pokemon.types[0]} />
        </BarChart>
        <Value>252</Value>
      </Item>
      <Item>
        <Key>Sp. Def</Key>
        <Value>{pokemon.specialDefense}</Value>
        <BarChart>
          <ProgressBar value={pokemon.specialDefense} type={pokemon.types[0]} />
        </BarChart>
        <Value>252</Value>
      </Item>
      <Item>
        <Key>Speed</Key>
        <Value>{pokemon.speed}</Value>
        <BarChart>
          <ProgressBar value={pokemon.speed} type={pokemon.types[0]} />
        </BarChart>
        <Value>252</Value>
      </Item>
      <Item>
        <Key>Total</Key>
        <Value bold>
          {pokemon.hp +
            pokemon.attack +
            pokemon.defense +
            pokemon.specialAttack +
            pokemon.specialDefense +
            pokemon.speed}
        </Value>
        <BarChart />
        <MaxText>Max</MaxText>
      </Item>
      <Description>
        The ranges shown on the right are for a level 100 Pokémon. Maximum
        values are based on a beneficial nature, 252 EVs, 31 IVs; minimum values
        are based on a hindering nature, 0 EVs, 0 IVs.
      </Description>
    </Container>
  );
};

export default memo(Stats);

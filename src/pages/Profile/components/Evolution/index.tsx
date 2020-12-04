import React, { memo } from 'react';

import {
  Container,
  Title,
  List,
  EvolutionRow,
  EvolutionItem,
  PokemonBackground,
  PokemonImg,
  EvolutionDescription,
  Level,
  Id,
  Name,
} from './styles';

import ArrowIcon from '../../../../assets/svgs/icons/front.svg';

import { theme } from '../../../../styles/theme/default';
import PokemonModel from '../../../../models/pokemon.model';
import { getPokemonId } from '../../../../utils/functions';

interface Props {
  pokemon: PokemonModel;
}

const Evolution: React.FC<Props> = ({ pokemon }) => {
  return (
    <Container>
      <List
        ListHeaderComponent={
          <Title type={pokemon.types[0]}>Evolution Chart</Title>
        }
        ListHeaderComponentStyle={{ marginBottom: 30 }}
        data={pokemon.evolution}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }: any) => (
          <EvolutionRow>
            <EvolutionItem>
              <PokemonBackground>
                <PokemonImg
                  source={{
                    uri: item.pokemonImageFrom,
                  }}
                />
              </PokemonBackground>
              <Id>{getPokemonId(item.pokemonIdFrom)}</Id>
              <Name>{item.pokemonNameFrom}</Name>
            </EvolutionItem>
            <EvolutionDescription>
              <ArrowIcon fill={theme.text.gray} />
              <Level>{`(Level ${item.level})`}</Level>
            </EvolutionDescription>
            <EvolutionItem>
              <PokemonBackground>
                <PokemonImg
                  source={{
                    uri: item.pokemonImageTo,
                  }}
                />
              </PokemonBackground>
              <Id>{getPokemonId(item.pokemonIdTo)}</Id>
              <Name>{item.pokemonNameTo}</Name>
            </EvolutionItem>
          </EvolutionRow>
        )}
      />
    </Container>
  );
};

export default memo(Evolution);

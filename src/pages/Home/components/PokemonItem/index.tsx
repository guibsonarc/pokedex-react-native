import React, { memo } from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Id,
  Name,
  Types,
  TypeItem,
  PokemonImg,
  TypeText,
} from './styles';

import { getPokemonId, toFirstUpperCase } from '../../../../utils/functions';

interface Props {
  item: any;
  index: number;
}

const PokemonItem: React.FC<Props> = ({ item, index }) => {
  const navigation = useNavigation();

  return (
    <Container
      onPress={() => navigation.navigate('Profile', { index })}
      type={item.types[0]}
    >
      <Id>{getPokemonId(item.id)}</Id>
      <Name>{item.name}</Name>
      <Types>
        <TypeItem type={item.types[0]}>
          <TypeText>{toFirstUpperCase(item.types[0])}</TypeText>
        </TypeItem>
      </Types>
      <PokemonImg
        source={{
          uri: item.image,
        }}
      />
    </Container>
  );
};

export default memo(PokemonItem);

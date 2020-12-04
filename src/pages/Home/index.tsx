import React, { useState, useEffect } from 'react';

import { ActivityIndicator } from 'react-native';
import {
  Container,
  SafeArea,
  Content,
  AppBar,
  IconButton,
  Title,
  Subtitle,
  InputContainer,
  Input,
  List,
} from './styles';

import PokemonItem from './components/PokemonItem';

import GenerationIcon from '../../assets/svgs/icons/generation.svg';
import SortIcon from '../../assets/svgs/icons/sort.svg';
import FilterIcon from '../../assets/svgs/icons/filter.svg';
import SearchIcon from '../../assets/svgs/icons/search.svg';

import { theme } from '../../styles/theme/default';

import { usePokemon } from '../../hooks/pokemon.hook';

const Home: React.FC = () => {
  const [inFocus, setInFocus] = useState(false);
  const { loading, pokemons, getAllPokemons } = usePokemon();

  useEffect(() => {
    async function loadInitialData() {
      await getAllPokemons();
    }

    loadInitialData();
  }, []);

  return (
    <Container>
      <SafeArea>
        <Content>
          <AppBar>
            <IconButton onPress={() => false}>
              <GenerationIcon fill={theme.text.black} />
            </IconButton>
            <IconButton onPress={() => false}>
              <SortIcon fill={theme.text.black} />
            </IconButton>
            <IconButton onPress={() => false}>
              <FilterIcon fill={theme.text.black} />
            </IconButton>
          </AppBar>
          {loading ? (
            <ActivityIndicator color={theme.text.gray} />
          ) : (
            <List
              ListHeaderComponent={() => (
                <>
                  <Title>Pokédex</Title>
                  <Subtitle>
                    Search for Pokémon by name or using the National Pokédex
                    number.
                  </Subtitle>
                  <InputContainer inFocus={inFocus}>
                    <SearchIcon fill={theme.text.gray} />
                    <Input
                      onFocus={() => setInFocus(true)}
                      onBlur={() => setInFocus(false)}
                    />
                  </InputContainer>
                </>
              )}
              ListHeaderComponentStyle={{ marginBottom: 45 }}
              data={pokemons}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item, index }) => (
                <PokemonItem item={item} index={index} />
              )}
            />
          )}
        </Content>
      </SafeArea>
    </Container>
  );
};

export default Home;

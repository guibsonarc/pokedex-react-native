import React, { useState, useEffect } from 'react';

import { ActivityIndicator } from 'react-native';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { usePokemon } from '../../hooks/pokemon.hook';

import { NavigationProps } from '../../routes/app.routes';

import {
  Container,
  SafeArea,
  Content,
  AppBar,
  IconButton,
  PokemonContainer,
  PokemonImg,
  PokemonContent,
  Id,
  Name,
  Types,
  TypeItem,
  TypeText,
  Tabs,
  Tab,
  TabTitle,
  TabContainer,
} from './styles';

import BackIcon from '../../assets/svgs/icons/back.svg';
import About from './components/About';
import Evolution from './components/Evolution';
import Stats from './components/Stats';

import { theme } from '../../styles/theme/default';
import { getPokemonId, toFirstUpperCase } from '../../utils/functions';

const Profile: React.FC = () => {
  const navigation = useNavigation();
  const { pokemons, getPokemonDetails, loading } = usePokemon();
  const { index } = useRoute<RouteProp<NavigationProps, 'Profile'>>().params;
  const [tabIndex, setTabIndex] = useState(1);
  const type = pokemons[index].types[0];

  useEffect(() => {
    async function loadInitialData() {
      await getPokemonDetails(index);
    }

    loadInitialData();
  }, []);

  const setTab = (tab: number) => {
    if (tabIndex !== tab) setTabIndex(tab);
  };

  const renderTabContent = (tab: number) => {
    if (loading) {
      return <ActivityIndicator color={theme.text.gray} />;
    }
    switch (tab) {
      case 2:
        return <Stats pokemon={pokemons[index]} />;
      case 3:
        return <Evolution pokemon={pokemons[index]} />;
      default:
        return <About pokemon={pokemons[index]} />;
    }
  };

  return (
    <Container type={type}>
      <SafeArea>
        <Content>
          <AppBar>
            <IconButton onPress={() => navigation.goBack()}>
              <BackIcon fill={theme.text.white} />
            </IconButton>
          </AppBar>
          <PokemonContainer>
            <PokemonImg
              source={{
                uri: pokemons[index].image,
              }}
            />
            <PokemonContent>
              <Id>{getPokemonId(pokemons[index].id)}</Id>
              <Name>{pokemons[index].name}</Name>
              <Types>
                <TypeItem type={type}>
                  <TypeText>{toFirstUpperCase(type)}</TypeText>
                </TypeItem>
              </Types>
            </PokemonContent>
          </PokemonContainer>
        </Content>
        <Tabs>
          <Tab onPress={() => setTab(1)}>
            <TabTitle selected={tabIndex === 1}>About</TabTitle>
          </Tab>
          <Tab onPress={() => setTab(2)}>
            <TabTitle selected={tabIndex === 2}>Stats</TabTitle>
          </Tab>
          <Tab onPress={() => setTab(3)}>
            <TabTitle selected={tabIndex === 3}>Evolution</TabTitle>
          </Tab>
        </Tabs>
        <TabContainer>{renderTabContent(tabIndex)}</TabContainer>
      </SafeArea>
    </Container>
  );
};

export default Profile;

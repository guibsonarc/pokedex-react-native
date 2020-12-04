import styled, { css } from 'styled-components/native';

interface TypeProps {
  type: string;
}

export const Container = styled.View<TypeProps>`
  flex: 1;
  background-color: ${({ theme, type }) => theme.backgroundType[type]};
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  padding: 0 40px 0 40px;
`;

export const AppBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 10px 0;
  padding: 20px 0 20px 0;
`;

export const IconButton = styled.TouchableOpacity.attrs(() => ({
  hitSlop: {
    top: 10,
    left: 10,
    bottom: 10,
    right: 10,
  },
  activeOpacity: 0.6,
}))``;

export const PokemonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 35px;
`;

export const PokemonImg = styled.Image`
  width: 130px;
  height: 130px;
`;

export const PokemonContent = styled.View`
  margin-left: 25px;
`;

export const Id = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
  color: ${({ theme }) => theme.text.number};
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 32px;
  color: ${({ theme }) => theme.text.white};
  margin-bottom: 5px;
`;

export const Types = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

export const TypeItem = styled.View<TypeProps>`
  padding: 5px;
  border-radius: 3px;
  background-color: ${({ theme, type }) => theme.type[type]};
`;

export const TypeText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 12px;
  color: ${({ theme }) => theme.text.white};
`;

export const Tabs = styled.View`
  flex-direction: row;
  height: 50px;
`;

export const Tab = styled.TouchableOpacity.attrs({ activeOpacity: 0.6 })`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

interface TabTitleProps {
  selected?: boolean;
}

export const TabTitle = styled.Text<TabTitleProps>`
  font-size: 16px;
  font-family: ${({ theme, selected }) =>
    selected ? theme.fonts.bold : theme.fonts.regular};
  color: ${({ theme }) => theme.text.white};
`;

export const TabContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background.white};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 40px 40px 0 40px;
`;

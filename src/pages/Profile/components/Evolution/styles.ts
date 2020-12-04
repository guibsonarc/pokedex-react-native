import styled from 'styled-components/native';

interface TypeProps {
  type: string;
}

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text<TypeProps>`
  color: ${({ theme, type }) => theme.type[type]};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
})`
  flex: 1;
`;

export const EvolutionRow = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`;

export const EvolutionItem = styled.View`
  align-items: center;
`;

export const PokemonBackground = styled.View`
  background-color: #f5f5f5;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const PokemonImg = styled.Image`
  width: 80px;
  height: 80px;
`;

export const EvolutionDescription = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 30px;
`;

export const Level = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 12px;
  color: ${({ theme }) => theme.text.black};
  margin-top: 8px;
`;

export const Id = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 12px;
  color: ${({ theme }) => theme.text.gray};
  margin-top: 5px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
  color: ${({ theme }) => theme.text.black};
`;

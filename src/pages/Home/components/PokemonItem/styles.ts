import styled from 'styled-components/native';

interface TypeProps {
  type: string;
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})<TypeProps>`
  border-radius: 10px;
  background-color: ${({ theme, type }) => theme.backgroundType[type]};
  padding: 20px;
  margin-bottom: 30px;
`;

export const Id = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.text.number};
`;

export const Name = styled.Text`
  font-size: 26px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.text.white};
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

export const PokemonImg = styled.Image`
  width: 135px;
  height: 135px;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

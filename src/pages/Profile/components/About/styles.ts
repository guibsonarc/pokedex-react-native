import styled from 'styled-components/native';

interface TypeProps {
  type: string;
}

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
})``;

export const Description = styled.Text`
  color: ${({ theme }) => theme.text.gray};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 25px;
`;

export const Title = styled.Text<TypeProps>`
  color: ${({ theme, type }) => theme.type[type]};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin: 5px 0 20px 0;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const Key = styled.Text`
  color: ${({ theme }) => theme.text.black};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.medium};
  width: 85px;
`;

export const Value = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.text.gray};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: 10px;
`;

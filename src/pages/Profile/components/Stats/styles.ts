import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;

interface TypeProps {
  type: string;
}

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
})``;

export const Title = styled.Text<TypeProps>`
  color: ${({ theme, type }) => theme.type[type]};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: 20px;
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
  width: 44px;
`;

interface ValueProps {
  bold?: boolean;
}

export const Value = styled.Text<ValueProps>`
  color: ${({ theme }) => theme.text.gray};
  font-size: 16px;
  font-family: ${({ theme, bold }) =>
    bold ? theme.fonts.bold : theme.fonts.regular};
  margin-left: 10px;
  width: 32px;
  text-align: right;
`;

export const BarChart = styled.View`
  margin-left: 10px;
  flex: 1;
  justify-content: center;
`;

interface ProgressBarProps {
  value: number;
  type: string;
}

export const ProgressBar = styled.View<ProgressBarProps>`
  width: ${({ value }) => (value / 252) * (windowWidth - 210)}px;
  height: 4px;
  background-color: ${({ theme, type }) => theme.type[type]};
  border-radius: 2px;
`;

export const MaxText = styled.Text`
  color: ${({ theme }) => theme.text.black};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.medium};
  width: 30px;
  margin-left: 10px;
  text-align: right;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.text.gray};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-bottom: 20px;
`;

export const TypesInfo = styled.Text`
  color: ${({ theme }) => theme.text.gray};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 20px;
`;

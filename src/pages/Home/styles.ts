import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background.white};
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 40px 0 40px;
`;

export const AppBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 0 0 15px 0;
  padding: 20px 2.5px 20px 2.5px;
  background-color: ${({ theme }) => theme.background.white};
`;

export const IconButton = styled.TouchableOpacity.attrs(() => ({
  hitSlop: {
    top: 10,
    left: 10,
    bottom: 10,
    right: 10,
  },
  activeOpacity: 0.6,
}))`
  margin-left: 22.5px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.text.black};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.text.gray};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin: 10px 0 25px 0;
`;

interface InputContainerProps {
  inFocus: boolean;
}

export const InputContainer = styled.View<InputContainerProps>`
  height: 60px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 0 27px 0 27px;
  margin-bottom: 15px;
  background-color: ${({ theme, inFocus }) =>
    inFocus ? theme.background.pressedInput : theme.background.defaultInput};
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholder: 'What Pokémon are you looking for?',
  placeholderTextColor: theme.text.gray,
}))`
  height: 60px;
  flex: 1;
  margin-left: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.text.black};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
})`
  flex: 1;
`;

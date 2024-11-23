import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex-direction: column;
    padding: 0 24px;
    justify-content: center;
    flex: 1;
    
`

export const Button = styled.TouchableOpacity`
    background-color: #a65bfa;
    padding: 12px 20px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`;

export const ButtonText = styled.Text`
    color: #fff;
`

export const Input = styled.TextInput`
    padding: 12px 20px;
    border-radius: 8px;
    width: 100%;
    background-color: #d4d4d8;
    margin-bottom: 12px;
`;

export const TitlePage = styled.Text`
    font-size: 24px;
    margin-bottom: 48px;
`;

export const Label = styled.Text`
    color: #71717a;
    font-size: 16px;
    margin-bottom: 4px;
`
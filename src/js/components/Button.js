//@flow

import styled from 'styled-components'

const colors = {
    blue: '#00bfff',
    white: '#FFFFFF',
    black: '#000000'
}

const Button = styled.button`
    text-align: center;
    font-size: 1.0em;
    border: 2px;
    border-radius: 20px;
    border-color: tomato;
    background-color: ${props => props.primary? colors.blue : colors.white};
    display:inline-block;
    width: 200px;
    height:70px;
    color: ${props => props.primary? colors.white: colors.blue};
`;
//figure out boreder color

export default Button

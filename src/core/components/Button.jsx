import React from 'react'; 
import styled from '@emotion/styled';

const ButtonStyled = styled.button`
    color: black;
    border: 2px solid black;
    padding: 4px 20px;
    margin: 0 10px;
`;

const Button = (props) => {
    const {children, onClick} = props;

    return (
        <ButtonStyled onClick={onClick}>
            {children}
        </ButtonStyled>
    )
}

export default Button;
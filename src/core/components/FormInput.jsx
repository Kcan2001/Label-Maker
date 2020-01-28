import React from 'react'; 
import styled from '@emotion/styled';

import { OPTIONS } from '../../features/Actions';

const InputStyled = styled.input`
    width: ${props => props.width};

    border: 5px solid white; 
    -webkit-box-shadow: 
        inset 0 0 8px  rgba(0,0,0,0.1),
            0 0 16px rgba(0,0,0,0.1); 
    -moz-box-shadow: 
        inset 0 0 8px  rgba(0,0,0,0.1),
            0 0 16px rgba(0,0,0,0.1); 
    box-shadow: 
        inset 0 0 8px  rgba(0,0,0,0.1),
            0 0 16px rgba(0,0,0,0.1); 
    padding: 15px;
    background: rgba(255,255,255,0.5);
    margin: 0 0 10px 0
    `;

    const LabelStyled = styled.span`
        margin-right: 16px;
        display: inline-block;
        width: 40px;
    `;

const FormInput = (props) => {
    const { label, width, value, keyPressHandler, dataType } = props; 

    return (
    <label>
        <LabelStyled>
            {label}
        </LabelStyled>
        <InputStyled min="1" max={label === OPTIONS ? "2" : ""} width={width} type={"text"} name={label} value={value} onKeyDown={(e) => keyPressHandler(e, dataType)} />
    </label>
    )
}

export default FormInput;
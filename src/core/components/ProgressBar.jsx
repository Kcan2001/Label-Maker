import React, {useContext} from 'react'; 
import styled from '@emotion/styled';

import {StateContext} from '../../features/Context';

const StyledBar = styled.progress`
    background-color: grey;
    width: 100%;
`;

const getValue = (step) => {
switch (step) {
    case 1:
        return '0';
    case 2:
        return '25';
    case 3:
        return '50'
    case 4:
        return '75';
    case 5:
        return '100';
    default:
        throw new Error();
    }
}

const ProgressBar = () => {
    const state = useContext(StateContext);
    const {step} = state;

    return (
        <StyledBar value={getValue(step)} max="100"></StyledBar>
    )
}

export default ProgressBar;
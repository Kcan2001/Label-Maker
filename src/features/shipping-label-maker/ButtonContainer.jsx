import React, {useContext} from 'react'; 
import styled from '@emotion/styled';

import {StateContext} from '../Context';
import {NEXT_STEP, PREVIOUS_STEP} from '../Actions';

import Button from '../../core/components/Button';

const ButtonStyledContianer = styled.div`
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
`;

const ButtonContainer = (props) => {
    const {onButtonHandle} = props;
    const state = useContext(StateContext);
    const {step} = state;

    return (
        <ButtonStyledContianer>
            {(step === 1) ? null :
                <Button onClick={() => onButtonHandle(PREVIOUS_STEP)}>
                    Previous
                </Button>
            }
            {(step === 5) ? null :
                <Button onClick={() => onButtonHandle(NEXT_STEP)}>
                    Next
                </Button>
            }
        </ButtonStyledContianer>
    )
}

export default ButtonContainer;
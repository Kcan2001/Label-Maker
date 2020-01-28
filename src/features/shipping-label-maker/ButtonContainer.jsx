import React, {useContext} from 'react'; 
import styled from '@emotion/styled';

import {StateContext} from '../Context';
import {NEXT_STEP, PREVIOUS_STEP, CONFIRM_LABEL, START_OVER} from '../Actions';

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
            {(step === 1 || step === 6) ? null :
                <Button onClick={() => onButtonHandle(PREVIOUS_STEP)}>
                    Previous
                </Button>
            }
            {(step === 5) ? 
            <Button onClick={() => onButtonHandle(CONFIRM_LABEL)}>
                    Confirm Label
                </Button> : null 
            }
            {(step === 5 || step === 6) ? null
                :
                <Button onClick={() => onButtonHandle(NEXT_STEP)}>
                    Next
                </Button>
            }
            
            {(step === 6) ? 
            <React.Fragment>
                <Button onClick={() => onButtonHandle(START_OVER)}>
                    Start Over
                </Button>
                <Button onClick={() => window.print()}>
                    Print Label
                </Button> 
            </React.Fragment>
            : null
            }
        </ButtonStyledContianer>
    )
}

export default ButtonContainer;
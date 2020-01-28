import React, {useReducer} from 'react'; 
import styled from '@emotion/styled';

import {StateContext, DispatchContext} from '../Context';
import {Reducer, initalState} from '../Reducer';

import ProgressBar from '../../core/components/ProgressBar';
import FormContainer from './FormContainer';

const OuterWrapperGrid = styled.div`
    display: flex;
    justify-content: center;
`;

const ShippingLabelContianer = styled.div`
    border: 3px solid black;
    padding: 12px;
    width: 50%;
    diplay: flex;
    flex-wrap: wrap;
`;

const Title = styled.h1`
    color: black
`;

const ShippingLabelMaker = () => {
    const [state, dispatch] = useReducer(Reducer, initalState);

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <OuterWrapperGrid>
                <ShippingLabelContianer>
                    <Title>Shipping Label Maker</Title>
                    <ProgressBar />
                    <FormContainer />
                </ShippingLabelContianer>
                </OuterWrapperGrid>
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}

export default ShippingLabelMaker;

import React, {useContext} from 'react'; 
import styled from '@emotion/styled';

import {StateContext, DispatchContext} from '../Context';

import ButtonContainer from './ButtonContainer';

const LabelContianer = styled.div`
    padding: 12px;
    diplay: flex;
    flex-wrap: wrap;
`;

const ToFromLabel = styled.p`
    font-weight: bold;
    font-size: 18px;
    margin: 10px 0;
`;

const AddressLabel = styled.p`
    font-size: 14px;
    margin: 5px 10px;
`;

const TableDividers = styled.div`
    display: flex;
    width: 100%;
`;

const ParagraphDividers = styled.div`
    display: block;
    width: 100%;
`;

const ShippingLabel = () => {
    const globalState = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const {
        SENDER_NAME,
        SENDER_STREET,
        SENDER_CITY,
        SENDER_STATE,
        SENDER_ZIP,
        RECIEVER_NAME,
        RECIEVER_STREET,
        RECIEVER_CITY,
        RECIEVER_STATE,
        RECIEVER_ZIP,
    } = globalState;

const HandleButtonRestartClick = (buttonType) => {
    dispatch({type: buttonType});
}

    return (
    <LabelContianer>
            <TableDividers>
                <ParagraphDividers>
                    <ToFromLabel>From:</ToFromLabel>
                    <AddressLabel>{SENDER_NAME}</AddressLabel>
                    <AddressLabel>{SENDER_STREET}</AddressLabel>
                    <AddressLabel>{SENDER_CITY}, {SENDER_STATE} {SENDER_ZIP}</AddressLabel>
                </ParagraphDividers>
                <ParagraphDividers>
                    <ToFromLabel>To:</ToFromLabel>
                    <AddressLabel>{RECIEVER_NAME}</AddressLabel>
                    <AddressLabel>{RECIEVER_STREET}</AddressLabel>
                    <AddressLabel>{RECIEVER_CITY}, {RECIEVER_STATE} {RECIEVER_ZIP}</AddressLabel>
                </ParagraphDividers>
            </TableDividers>

            <ButtonContainer onButtonHandle={HandleButtonRestartClick}/>
    </LabelContianer>
    )
}

export default ShippingLabel;
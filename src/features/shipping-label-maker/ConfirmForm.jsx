
import React, {useContext} from 'react'; 
import styled from '@emotion/styled';

import {StateContext} from '../Context';

import ButtonContainer from './ButtonContainer';

const LabelContianer = styled.div`
    padding: 12px;
    diplay: flex;
    flex-wrap: wrap;
`;

const SectionTitle = styled.h2`
    color: black
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

const ConfirmForm = (props) => {
    const {onButtonHandle, title} = props;
    const globalState = useContext(StateContext)

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
        PACKAGE_WEIGHT, 
        SHIPPING_OPTION
    } = globalState;

    const ShippingOption = parseInt(SHIPPING_OPTION) === 1 ? "ground" : "priority";
    const ShippingOptionCost = parseInt(SHIPPING_OPTION) === 1 ? 1 : 1.5;
    const TotalShippingCost = parseInt(PACKAGE_WEIGHT) * 0.40 * ShippingOptionCost

    return (
    <LabelContianer>
        <SectionTitle>{title}</SectionTitle>
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
            <div>
                <h3>Your total cost is ${TotalShippingCost}.</h3>
                <p>At {PACKAGE_WEIGHT}lbs. for {ShippingOption} shipping.</p>
            </div>
            <ButtonContainer onButtonHandle={onButtonHandle}/>
    </LabelContianer>
    )
}

export default ConfirmForm;
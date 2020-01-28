import React from 'react'; 
import styled from '@emotion/styled';

import ButtonContainer from './ButtonContainer';
import FormInput from '../../core/components/FormInput';

const LabelContianer = styled.div`
    padding: 12px;
    diplay: flex;
    flex-wrap: wrap;
`;

const SectionTitle = styled.h2`
    color: black
`;

const TableDividers = styled.div`
    display: block;
    width: 100%;
`;

const TableDividersFlex = styled.div`
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
`;

const ItemSpacer = styled.span`
    display: inline-block;
    margin: 0 15px;
`;

const AddressForm = (props) => {
    const {dataTypes, messageType, formState, keyPressHandler, onButtonHandle} = props;
    const {name, street, city, state, zip} = dataTypes;

    return (
<LabelContianer>
<SectionTitle>Enter the {messageType}'s address: </SectionTitle>
    <TableDividers>
        <FormInput width="80%" label="Name" dataType={name} value={formState[name] ? formState[name] : ""} keyPressHandler={keyPressHandler}/>            
    </TableDividers>
    <TableDividers>
        <FormInput width="80%" label="Street" dataType={street} value={formState[street] ? formState[street] : ""} keyPressHandler={keyPressHandler}/>
    </TableDividers>
    <TableDividersFlex>
        <FormInput width="55%" label="City" dataType={city} value={formState[city] ? formState[city] : ""} keyPressHandler={keyPressHandler}/>
        <ItemSpacer>
            <FormInput width="50%" label="State" dataType={state} value={formState[state] ? formState[state] : ""} keyPressHandler={keyPressHandler}/>
        </ItemSpacer>
        <FormInput width="38%" label="Zip" dataType={zip} value={formState[zip] ? formState[zip] : ""} keyPressHandler={keyPressHandler}/>
    </TableDividersFlex>

    <ButtonContainer onButtonHandle={onButtonHandle}/>

</LabelContianer>
    )
}

export default AddressForm;
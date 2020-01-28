import React from 'react'; 
import styled from '@emotion/styled';

import FormNumberInput from '../../core/components/FormNumberInput';
import ButtonContainer from './ButtonContainer';

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


const OneOptionForm = (props) => {
    const {keyPressHandler, onButtonHandle, formState, dataType, title, label} = props;

    return (
    <LabelContianer>
    <SectionTitle>{title}</SectionTitle>
        <TableDividers>
            <FormNumberInput width="50%" label={label} numberType={true} dataType={dataType} value={formState[dataType] ? formState[dataType] : ""} keyPressHandler={keyPressHandler}/>            
        </TableDividers>
        <ButtonContainer onButtonHandle={onButtonHandle}/>
    </LabelContianer>
    )
}

export default OneOptionForm;
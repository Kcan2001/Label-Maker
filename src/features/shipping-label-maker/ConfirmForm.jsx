import React from 'react'; 
import styled from '@emotion/styled';

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
    const {onButtonHandle, title} = props;

    return (
    <LabelContianer>
        <SectionTitle>{title}</SectionTitle>
            <TableDividers>
                Confirm          
            </TableDividers>
            <ButtonContainer onButtonHandle={onButtonHandle}/>
    </LabelContianer>
    )
}

export default OneOptionForm;
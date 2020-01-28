import React, {useState, useContext, useEffect} from 'react'; 
import {SENDER_NAME, SENDER_STREET, SENDER_CITY, SENDER_STATE, SENDER_ZIP, RECIEVER_NAME, RECIEVER_STREET, 
RECIEVER_CITY, RECIEVER_STATE, RECIEVER_ZIP, PACKAGE_WEIGHT, SHIPPING_OPTION, WEIGHT, OPTIONS } from '../Actions';
import {DispatchContext, StateContext} from '../Context';
import {LocalStateSaverReducer} from '../LocalStateSaverReducer';

import ShippingLabel from './ShippingLabel';
import AddressForm from './AddressForm';
import ConfirmForm from './ConfirmForm';
import OneOptionForm from './OneOptionForm';

const FormContainer = () => {
    const [formState, setFormState] = useState({});
    const globalState = useContext(StateContext)
    const dispatch = useContext(DispatchContext); 
    const {step} = globalState;

const keyHandler = (e, type) => {
    const regex = RegExp(/^[a-zA-Z0-9\x08\?]$/);

    if(e.key === 'Backspace' || e.key === "Delete") {
        setFormState({...formState, [type]: formState[type] ? formState[type].slice(0, -1): ''});
    } 
    else if (regex.test(e.key) || e.key === " ") {
        setFormState({...formState, [type]: (formState[type] ? formState[type] : '') + e.key});
    } 
    else {
        return;
    }
}

const ShippingOptionKeyHandlers = (e, type) => {
    const regex = RegExp(/^[0-9\x08\?]$/);
    const oneTwoRegex = RegExp(/^[1-2\x08\?]$/);

    if(e.key === 'Backspace' || e.key === "Delete") {
        setFormState({...formState, [type]: formState[type] ? formState[type].slice(0, -1): ''});
    } 
    else if (oneTwoRegex.test(e.key) && type === SHIPPING_OPTION) {
        setFormState({...formState, [type]: e.key});
    } 
    else if (regex.test(e.key) && type !== SHIPPING_OPTION) {
        setFormState({...formState, [type]: (formState[type] ? formState[type] : '') + e.key});
    } 
    else {
        return;
    }
}

const handleNextPreviousButtonClicks = (buttonType) => {
    dispatch({type: buttonType, payload: formState});
}

useEffect(() => {
    const loadLocalState = LocalStateSaverReducer(globalState);
    
    setFormState(loadLocalState);
}, [globalState]);


if(step === 1) {
    return (
        <AddressForm messageType='sender' formState={formState} dataTypes={{name: SENDER_NAME, street: SENDER_STREET, city: SENDER_CITY, state: SENDER_STATE, zip: SENDER_ZIP}} keyPressHandler={keyHandler} onButtonHandle={handleNextPreviousButtonClicks}/>
    )
} else if (step === 2) {
    return (
        <AddressForm messageType='reciever' formState={formState} dataTypes={{name: RECIEVER_NAME, street: RECIEVER_STREET, city: RECIEVER_CITY, state: RECIEVER_STATE, zip: RECIEVER_ZIP}} keyPressHandler={keyHandler} onButtonHandle={handleNextPreviousButtonClicks}/>
    )
} else if (step === 3) {
    return (
        <OneOptionForm label={WEIGHT} title="Enter the package weight:" dataType={PACKAGE_WEIGHT} formState={formState} keyPressHandler={ShippingOptionKeyHandlers} onButtonHandle={handleNextPreviousButtonClicks}/>
    )
}  else if (step === 4) {
    return (
        <OneOptionForm label={OPTIONS} title="Select your shipping option: 1 for Ground, 2 for Priority" dataType={SHIPPING_OPTION} formState={formState} keyPressHandler={ShippingOptionKeyHandlers} onButtonHandle={handleNextPreviousButtonClicks}/>
    )
} else if (step === 5) {
    return (
        <ConfirmForm title="Please confirm your order: " onButtonHandle={handleNextPreviousButtonClicks}/>
    )
} else if (step === 6) {
    return (
        <ShippingLabel />
    )
}
}

export default FormContainer;
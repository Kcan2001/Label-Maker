import {SENDER_NAME, SENDER_STREET, SENDER_CITY, SENDER_STATE, SENDER_ZIP, RECIEVER_NAME, RECIEVER_STREET, 
    RECIEVER_CITY, RECIEVER_STATE, RECIEVER_ZIP, PACKAGE_WEIGHT, SHIPPING_OPTION } from './Actions';

export const LocalStateSaverReducer = (globalState) => {
switch (globalState.step) {
    case 1:
        return {
            [SENDER_NAME]: globalState[SENDER_NAME],
            [SENDER_STREET]: globalState[SENDER_STREET],
            [SENDER_CITY]: globalState[SENDER_CITY],
            [SENDER_STATE]: globalState[SENDER_STATE],
            [SENDER_ZIP]: globalState[SENDER_ZIP],
        };
    case 2:
        return {
            [RECIEVER_NAME]: globalState[RECIEVER_NAME],
            [RECIEVER_STREET]: globalState[RECIEVER_STREET],
            [RECIEVER_CITY]: globalState[RECIEVER_CITY],
            [RECIEVER_STATE]: globalState[RECIEVER_STATE],
            [RECIEVER_ZIP]: globalState[RECIEVER_ZIP],
        };
    case 3:
        return {
            [PACKAGE_WEIGHT]: globalState[PACKAGE_WEIGHT],
        };
    case 4:
        return {
            [SHIPPING_OPTION]: globalState[SHIPPING_OPTION],
        };
    case 5:
        return {};
    case 6:
        return {};
        default:
            throw new Error();
        }
    }
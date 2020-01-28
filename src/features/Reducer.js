import {START_OVER, NEXT_STEP, PREVIOUS_STEP, CONFIRM_LABEL} from './Actions';

export const initalState = {
    step: 1,
}

export function Reducer(state, action) {
switch (action.type) {
    case NEXT_STEP:
        if(state.step === 5) return;
        return {
            ...state,
            ...action.payload, 
            step: state.step + 1
        };;
    case PREVIOUS_STEP:
        if(state.step === 1) return;
        return {
            ...state,
            ...action.payload, 
            step: state.step - 1
        };
    case CONFIRM_LABEL:
        if(state.step !== 5) return;
        return {
            ...state,
            ...action.payload, 
            step: 6
        };
    case START_OVER:
        return {
            ...initalState
        };
    default:
        throw new Error();
    }
}
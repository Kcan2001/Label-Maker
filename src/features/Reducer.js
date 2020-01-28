import {NEXT_STEP, PREVIOUS_STEP} from './Actions';

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
    default:
        throw new Error();
    }
}
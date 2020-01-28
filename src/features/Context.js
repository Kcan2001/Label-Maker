import {createContext} from 'react'; 
import {initalState} from '../features/Reducer';

export const StateContext = createContext(initalState);
export const DispatchContext = createContext();
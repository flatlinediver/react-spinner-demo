import React, { createContext, useReducer, useContext } from "react";
import {DEFAULT_SPINNER_VALUES as INITIAL_STATE} from '@flatlinediver/react-spinner'

const Store = createContext(INITIAL_STATE);

const defaultAction = (state, action) => {
    return {...state, ...action.payload};
};

const actions = {
    position: defaultAction,
    speed: defaultAction,
    edges: defaultAction,
    size: defaultAction,
    thick: defaultAction,
    colors: defaultAction,
}

const reducer = (state, action) => actions[action.type](state, action);

export const StoreProvider = ({children}) => {
    const [store, dispatch] = useReducer(reducer, INITIAL_STATE);
    const handlers = {
        position: (payload) => dispatch({type: 'position', payload }),
        colors: (payload) => dispatch({type: 'colors', payload }),
        speed: (payload) => dispatch({type: 'speed', payload }),
        edges: (payload) => dispatch({type: 'edges', payload}),
        size: ({target: {value: payload}}) => dispatch({type: 'size', payload: {size: payload}}),
        thick: () => dispatch({type: 'thick', payload: {thick: !store.thick}}),
    };

    return (
        <Store.Provider value={{
            store,
            handlers,
        }}>
            {children}
        </Store.Provider>
    );
}; 

export const useStore = () => useContext(Store);
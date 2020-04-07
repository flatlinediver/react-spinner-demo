import React, { createContext, useState } from "react";

export const ConfigContext = createContext({});

export default ({children}) => {
    const [ spinnerProps, setSpinnerProps ] = useState({})
    const modifySpinner = payload => {
        setSpinnerProps({
            ...spinnerProps,
            ...payload
        })
    }
    return (
        <ConfigContext.Provider value={{spinnerProps, modifySpinner}}>
            {children}
        </ConfigContext.Provider>
    );
}; 

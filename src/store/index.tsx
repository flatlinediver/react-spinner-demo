import React, { createContext, useContext, FC, useState } from 'react';
import { DEFAULT_SPINNER_VALUES as INITIAL_STATE } from '@flatlinediver/react-spinner';
import { SpinnerProps as State } from '@flatlinediver/react-spinner/lib/types';

type UpdateStore = (payload?: State) => void;

const Store = createContext<{ store: State; updateStore: UpdateStore }>({
  store: INITIAL_STATE,
  updateStore: () => null,
});

export const StoreProvider: FC = ({ children }) => {
  const [store, setStore] = useState(INITIAL_STATE);
  const updateStore: UpdateStore = (payload) => {
    setStore({ ...store, ...payload });
  };

  return <Store.Provider value={{ store, updateStore }}>{children}</Store.Provider>;
};

export const useStore = () => useContext(Store);

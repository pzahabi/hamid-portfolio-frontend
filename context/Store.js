"use client"
import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = { isPersian: true };

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_LANGUAGE": {
      const newIsPersian = action.payload;
      return { ...state, isPersian: newIsPersian };
    }
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}
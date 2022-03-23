import React, { createContext, useReducer } from "react";
import authInitialState from "./intialStates/authState";
import userInitialState from "./intialStates/userState";
import auth from "./reducers/auth";
import user from "./reducers/user";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [userState, userDispatch] = useReducer(user, userInitialState);

  return (
    <GlobalContext.Provider
      value={{ authState, userState, authDispatch, userDispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

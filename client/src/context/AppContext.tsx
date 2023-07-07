import React, { useReducer, useContext, createContext } from "react";
import reducer from "./Reducer";
import { CLEAR_ALERT, DISPLAY_ALERT } from "./Action";

interface State {
  isLoading: boolean;
  showAlert: boolean;
  alertText: string;
  alertType: string;
}

const initialState: State = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

export interface AppContextProps {
  state: State;
  displayAlert: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = (): void => {
    dispatch({
      type: DISPLAY_ALERT,
      showAlert: false,
      alertText: "",
      alertType: "",
    });
    clearAlert();
  };

  const clearAlert = (): void => {
    setTimeout(() => {
      dispatch({type: CLEAR_ALERT});
    }, 3000);
  };

  const contextValue: AppContextProps = {
    state,
    displayAlert,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = (): AppContextProps | undefined => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext, initialState };

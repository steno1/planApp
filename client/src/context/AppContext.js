import React, { useReducer, useContext, createContext } from "react";
import reducer from "./Reducer";
import { CLEAR_ALERT, DISPLAY_ALERT } from "./Action";
var initialState = {
    isLoading: false,
    showAlert: false,
    alertText: "",
    alertType: "",
};
var AppContext = createContext(undefined);
var AppProvider = function (_a) {
    var children = _a.children;
    var _b = useReducer(reducer, initialState), state = _b[0], dispatch = _b[1];
    var displayAlert = function () {
        dispatch({
            type: DISPLAY_ALERT,
            showAlert: false,
            alertText: "",
            alertType: "",
        });
        clearAlert();
    };
    var clearAlert = function () {
        setTimeout(function () {
            dispatch({ type: CLEAR_ALERT });
        }, 3000);
    };
    var contextValue = {
        state: state,
        displayAlert: displayAlert,
    };
    return (React.createElement(AppContext.Provider, { value: contextValue }, children));
};
var useAppContext = function () {
    return useContext(AppContext);
};
export { AppProvider, useAppContext, initialState };

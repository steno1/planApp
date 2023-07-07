import React from 'react';
import { useAppContext } from '../context/AppContext';
var Alert = function () {
    var appContext = useAppContext();
    var _a = (appContext === null || appContext === void 0 ? void 0 : appContext.state) || {}, alertType = _a.alertType, alertText = _a.alertText;
    return (React.createElement("div", { className: "alert alert-".concat(alertType) }, alertText));
};
export default Alert;

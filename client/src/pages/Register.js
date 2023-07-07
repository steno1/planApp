var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState } from 'react';
import Wrapper from '../Assets/Wrappers/RegisterPage';
import { Logo, FormRow, Alert } from '../components';
import { useAppContext } from '../context/AppContext';
var initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
};
var Register = function () {
    var _a = useState(initialState), values = _a[0], setValues = _a[1];
    var appContext = useAppContext();
    var showAlert = appContext === null || appContext === void 0 ? void 0 : appContext.state.showAlert;
    var isLoading = appContext === null || appContext === void 0 ? void 0 : appContext.state.isLoading;
    var displayAlert = appContext === null || appContext === void 0 ? void 0 : appContext.displayAlert; // Update this line
    var toggleMember = function () {
        setValues(__assign(__assign({}, values), { isMember: !values.isMember }));
    };
    var handleChange = function (e) {
        var _a;
        var _b = e.target, name = _b.name, value = _b.value;
        setValues(__assign(__assign({}, values), (_a = {}, _a[name] = value, _a)));
    };
    var onSubmit = function (e) {
        e.preventDefault();
        var name = values.name, email = values.email, password = values.password, isMember = values.isMember;
        if (!email || !password || (!isMember && name)) {
            displayAlert === null || displayAlert === void 0 ? void 0 : displayAlert();
            return;
        }
        console.log(values);
    };
    return (React.createElement(Wrapper, { className: "full-page" },
        React.createElement("form", { className: "form", onSubmit: onSubmit },
            React.createElement("div", { className: "findLogo" },
                React.createElement(Logo, null)),
            React.createElement("h3", null, values.isMember ? 'Login' : 'Register'),
            showAlert && React.createElement(Alert, null),
            !values.isMember && (React.createElement(FormRow, { name: "name", type: "text", value: values.name, handleChange: handleChange })),
            React.createElement(FormRow, { name: "email", type: "email", value: values.email, handleChange: handleChange }),
            React.createElement(FormRow, { name: "password", type: "password", value: values.password, handleChange: handleChange }),
            React.createElement("button", { type: "submit", className: "btn btn-block" }, "submit"),
            React.createElement("p", null,
                values.isMember ? 'Not a member yet?' : 'Already a member?',
                React.createElement("button", { type: "button", onClick: toggleMember, className: "member-btn" }, values.isMember ? 'Register' : 'Login')))));
};
export default Register;

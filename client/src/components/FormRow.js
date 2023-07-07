import React from 'react';
var FormRow = function (_a) {
    var name = _a.name, labelText = _a.labelText, type = _a.type, value = _a.value, handleChange = _a.handleChange;
    return (React.createElement("div", { className: 'form-row' },
        React.createElement("label", { htmlFor: name, className: 'form-label' }, labelText || name),
        React.createElement("input", { type: type, value: value, name: name, onChange: handleChange, className: 'form-input' })));
};
export default FormRow;

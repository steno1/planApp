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
import { DISPLAY_ALERT, CLEAR_ALERT } from "./Action";
var reducer = function (state, action) {
    switch (action.type) {
        case DISPLAY_ALERT:
            return __assign(__assign({}, state), { showAlert: true, alertType: "danger", alertText: "Please provide all values" });
        case CLEAR_ALERT:
            return __assign(__assign({}, state), { showAlert: false, alertType: "", alertText: "" });
        default:
            throw new Error("No such action");
    }
};
export default reducer;

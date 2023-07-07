import { DISPLAY_ALERT, CLEAR_ALERT } from "./Action";

interface State {
  isLoading: boolean;
  showAlert: boolean;
  alertText: string;
  alertType: string;
}

type Action =
  | { type: typeof DISPLAY_ALERT; 
    showAlert: boolean;
     alertText: string;
     alertType: string }
     
  | { type: typeof CLEAR_ALERT };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: "danger",
        alertText: "Please provide all values",
      };
    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: "",
        alertText: "",
      };
    default:
      throw new Error(`No such action`);
  }
};

export default reducer;

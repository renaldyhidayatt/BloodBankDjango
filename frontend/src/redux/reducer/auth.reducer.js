import { toast } from "react-toastify";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      toast("Welcome to mobile legend", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
      };
    case "SIGN_UP":
      return {
        ...state,
        isLoggedIn: false,
      };
    case "SIGN_OUT":
      toast("GoodBy", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;

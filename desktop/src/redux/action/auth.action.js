import { toast } from "react-toastify";
import { authService } from "../../service/auth.service";

export const signUp = (user) => {
  return (dispatch) => {
    authService
      .register(user)
      .then((res) => {
        console.log(res);
        dispatch({
          type: "SIGN_UP",
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const signIn = (email, password) => {
  return (dispatch) => {
    authService
      .login(email, password)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        toast.success("Bisa", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        dispatch({
          type: "SIGN_IN",
          payload: {
            user: res.data,
          },
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const signOut = (history) => {
  authService.logout();
  return (dispatch) => {
    dispatch({
      type: "SIGN_OUT",
    });
    history.push("/");
  };
};

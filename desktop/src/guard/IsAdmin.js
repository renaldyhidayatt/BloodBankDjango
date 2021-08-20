import { useSelector } from "react-redux";

import { Route, Redirect } from "react-router-dom";

const IsAdmin = ({ component: Component, ...rest }) => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn === true ? (
          user.role === 1 ? (
            <Component {...props} />
          ) : (
            <Redirect to="/dashboard" />
          )
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default IsAdmin;

import { Switch, Route } from "react-router";
import Home from "../Home";
import Navbar from "../../components/Navbar";
import RegisterPage from "../Register";
import LoginPage from "../Login";
import { Redirect } from "react-router-dom";

const RouteLayoutHome = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
};

export default RouteLayoutHome;

import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import IsAuth from "./guard/IsAuth";
import IsAdmin from "./guard/IsAdmin";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <IsAdmin exact path="/admin" component={Dashboard} />
          <Route exact path="/" component={Home} />
          <IsAuth exact path="/dashboard" component={Dashboard} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;

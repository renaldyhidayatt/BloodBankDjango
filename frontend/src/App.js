import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import RouteLayoutAdmin from "./pages/admin";
import RouteLayoutHome from "./pages/home";
import IsAuth from "./guard/IsAuth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path="/admin"
            render={(props) => <RouteLayoutAdmin {...props} />}
          />
          <Route path="/" render={(props) => <RouteLayoutHome {...props} />} />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;

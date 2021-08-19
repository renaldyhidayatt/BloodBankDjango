import { Switch, Route, Redirect } from "react-router";
import Bisa from "./Bisa";
import Dashboard from "./Dashboard";
import LayoutAdmin from "../../components/Layouts/LayoutAdmin";
import AgentList from "./Agent/AgentList";
import AgentCreatePage from "./Agent/AgentCreate";
import AgentUpdatePage from "./Agent/AgentUpdate";

const RouteLayoutAdmin = () => {
  return (
    <LayoutAdmin>
      <Switch>
        <Route path="/admin/agent/create" component={AgentCreatePage} />
        <Route path="/admin/agent/update/:id" component={AgentUpdatePage} />
        <Route path="/admin/bisa" component={Bisa} />
        <Route path="/admin/agent" component={AgentList} />
        <Route exact={true} path="/admin/" component={Dashboard} />
        <Redirect from="*" to="/admin/" />
      </Switch>
    </LayoutAdmin>
  );
};

export default RouteLayoutAdmin;

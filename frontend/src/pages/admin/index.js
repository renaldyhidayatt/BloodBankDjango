import { Switch, Route, Redirect } from "react-router";
import Bisa from "./Bisa";
import Dashboard from "./Dashboard";
import LayoutAdmin from "../../components/Layouts/LayoutAdmin";
import AgentList from "./Agent/AgentList";
import AgentCreatePage from "./Agent/AgentCreate";
import AgentUpdatePage from "./Agent/AgentUpdate";
import IsAuth from "../../guard/IsAuth";
import ReligionList from "./Religion/List";
import UpdateReligon from "./Religion/Update";
import DonorList from "./Donor/List";
import CreateDonor from "./Donor/Create";
import UpdateDonor from "./Donor/Update";

const RouteLayoutAdmin = () => {
  return (
    <LayoutAdmin>
      <Switch>
        <Route path="/admin/donor/update/:id" component={UpdateDonor} />
        <Route path="/admin/donor/create" component={CreateDonor} />
        <Route path="/admin/donor" component={DonorList} />
        <Route path="/admin/agent/create" component={AgentCreatePage} />
        <Route path="/admin/agent/update/:id" component={AgentUpdatePage} />
        <Route path="/admin/religion/:id" component={UpdateReligon} />
        <Route path="/admin/religion" component={ReligionList} />
        <IsAuth path="/admin/bisa" component={Bisa} />
        <Route path="/admin/agent" component={AgentList} />
        <Route exact={true} path="/admin/" component={Dashboard} />
        <Redirect from="*" to="/admin/" />
      </Switch>
    </LayoutAdmin>
  );
};

export default RouteLayoutAdmin;

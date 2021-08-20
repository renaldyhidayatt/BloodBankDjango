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
import CategoryList from "./Category/List";

import IsAdmin from "../../guard/IsAdmin";

const RouteLayoutAdmin = () => {
  return (
    <LayoutAdmin>
      <Switch>
        <IsAdmin path="/admin/category" component={CategoryList} />
        <IsAdmin path="/admin/donor/update/:id" component={UpdateDonor} />
        <IsAdmin path="/admin/donor/create" component={CreateDonor} />
        <IsAdmin path="/admin/donor" component={DonorList} />
        <IsAdmin path="/admin/agent/create" component={AgentCreatePage} />
        <IsAdmin path="/admin/agent/update/:id" component={AgentUpdatePage} />
        <IsAdmin path="/admin/religion/:id" component={UpdateReligon} />
        <IsAdmin path="/admin/religion" component={ReligionList} />
        <IsAdmin path="/admin/bisa" component={Bisa} />
        <IsAdmin path="/admin/agent" component={AgentList} />
        <Route exact={true} path="/admin/" component={Dashboard} />
        <Redirect from="*" to="/admin/" />
      </Switch>
    </LayoutAdmin>
  );
};

export default RouteLayoutAdmin;

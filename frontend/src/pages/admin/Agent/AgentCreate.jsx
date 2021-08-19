import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AgentCreateOrEdit from "../../../components/admin/AgentCreateOrEdit";
import { agentCreate } from "../../../redux/action/agent.action";

function AgentCreatePage() {
  const intialState = {
    name: "",
    designation: "",
    organization: "",
    description: "",
    email: "",
    state: "",
    country: "",
  };

  const [create, setCreate] = useState(intialState);
  const [photo, setPhoto] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCreate({ ...create, [name]: value });
  };
  const onChangePhoto = (e) => {
    const photo = e.target.files[0];
    setPhoto(photo);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", create.name);
    data.append("designation", create.designation);
    data.append("organization", create.organization);
    data.append("description", create.description);
    data.append("email", create.email);
    data.append("city", create.city);
    data.append("state", create.organization);
    data.append("country", create.country);
    console.log(data);
    dispatch(agentCreate(data, history));
  };
  return (
    <div className="container-fluid">
      <div className="card-shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Agent Create</h6>
        </div>
        <div className="card-body">
          <AgentCreateOrEdit
            Create={true}
            name={create.name}
            designation={create.designation}
            organization={create.organization}
            description={create.description}
            email={create.email}
            city={create.city}
            state={create.state}
            country={create.country}
            handleInputChange={handleInputChange}
            onChangePhoto={onChangePhoto}
            HandleSubmit={HandleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
export default AgentCreatePage;

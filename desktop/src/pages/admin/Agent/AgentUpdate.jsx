import AgentCreateOrEdit from "../../../components/admin/AgentCreateOrEdit";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { agentUpdate } from "../../../redux/action/agent.action";
import { agentService } from "../../../service/agent.service";

function AgentUpdatePage(props) {
  const id = props.match.params.id;

  const intialState = {
    name: "",
    designation: "",
    organization: "",
    description: "",
    email: "",
    state: "",
    country: "",
  };

  const [update, setUpdate] = useState(intialState);

  const [photo, setPhoto] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdate({ ...update, [name]: value });
  };

  const onChangePhoto = (e) => {
    const photo = e.target.files[0];
    setPhoto(photo);
  };

  useEffect(() => {
    agentService
      .AgentDetail(id)
      .then((res) => {
        setUpdate(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const HandleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", update.name);
    data.append("designation", update.designation);
    data.append("organization", update.organization);
    data.append("description", update.description);
    data.append("email", update.email);
    data.append("city", update.city);
    data.append("state", update.organization);
    data.append("country", update.country);
    data.append("photo", photo);
    console.log(data);
    dispatch(agentUpdate(id, data, history));
  };
  return (
    <div className="container-fluid">
      <div className="card-shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Agent Update</h6>
        </div>
        <div className="card-body">
          <AgentCreateOrEdit
            Create={false}
            name={update.name}
            designation={update.designation}
            organization={update.organization}
            description={update.description}
            email={update.email}
            city={update.city}
            state={update.state}
            country={update.country}
            handleInputChange={handleInputChange}
            onChangePhoto={onChangePhoto}
            HandleSubmit={HandleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
export default AgentUpdatePage;

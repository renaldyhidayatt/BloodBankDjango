import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import TableAgent from "../../../components/admin/TableAgent";
import { agenList } from "../../../redux/action/agent.action";

function AgentList(props) {
  //   const dispatch = useDispatch();
  useEffect(() => {
    props.dispatch(agenList());
  });
  return (
    <div className="container-fluid">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Agent List</h6>
        </div>
        <div className="card-body">
          <TableAgent />
        </div>
      </div>
    </div>
  );
}

export default connect()(AgentList);

import { useEffect } from "react";
import { connect } from "react-redux";
import { ListReligion } from "../../../redux/action/religion.action";
import TableReligion from "../../../components/admin/religion/TableReligion";

function ReligionList(props) {
  useEffect(() => {
    props.dispatch(ListReligion());
  });

  return (
    <div className="container-fluid">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Agent List</h6>
        </div>
        <div className="card-body">
          <TableReligion />
        </div>
      </div>
    </div>
  );
}
export default connect()(ReligionList);

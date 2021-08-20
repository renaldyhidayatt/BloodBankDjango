import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import TableDonor from "../../../components/admin/donor/TableDonor";
import { donorList } from "../../../redux/action/donor.action";

function DonorList(props) {
  //   const dispatch = useDispatch();
  useEffect(() => {
    props.dispatch(donorList());
  });
  return (
    <div className="container-fluid">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Donor List</h6>
        </div>
        <div className="card-body">
          <TableDonor />
        </div>
      </div>
    </div>
  );
}

export default connect()(DonorList);

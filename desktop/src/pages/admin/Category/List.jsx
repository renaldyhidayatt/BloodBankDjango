import { useEffect } from "react";
import { categoryBloodList } from "../../../redux/action/category.action";

import TableCategory from "../../../components/admin/categoryblood/TableCategory";
import { connect } from "react-redux";

function CategoryBloodList(props) {
  useEffect(() => {
    props.dispatch(categoryBloodList());
  });

  return (
    <div className="container-fluid">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Agent List</h6>
        </div>
        <div className="card-body">
          <TableCategory />
        </div>
      </div>
    </div>
  );
}

export default connect()(CategoryBloodList);

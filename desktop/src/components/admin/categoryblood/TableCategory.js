import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useDispatch, useSelector } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import { Link } from "react-router-dom";
import { categoryBloodDelete } from "../../../redux/action/category.action";
import { useEffect } from "react";
import { categoryService } from "../../../service/categoryBlood.service";

const TableCategory = (props) => {
  const { SearchBar } = Search;
  const { getCategoryDonor, errorMessage } = useSelector(
    (state) => state.category
  );
  //   const dispatch = useDispatch();

  const dispatch = useDispatch();
  const HandleDelete = (id) => {
    dispatch(categoryBloodDelete(id));
  };

  const defaultSorted = [
    {
      dataField: "id",
      order: "asc",
    },
  ];
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "5%" };
      },
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
            <button
              className="btn btn-danger mr-2"
              onClick={() => HandleDelete(row.id)}
            >
              <i className="fa fa-trash"></i> Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="table-responsive">
      {getCategoryDonor ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={getCategoryDonor}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <div className="row">
                <div>
                  <div className="float-right mr-5">
                    <SearchBar {...props.searchProps} placeholder="Search .." />
                  </div>
                </div>
              </div>

              <BootstrapTable
                className="table table-bordered"
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {errorMessage ? (
            <h4>{errorMessage}</h4>
          ) : (
            <div className="spinner-border text-primary" />
          )}
        </div>
      )}
    </div>
  );
};

export default TableCategory;

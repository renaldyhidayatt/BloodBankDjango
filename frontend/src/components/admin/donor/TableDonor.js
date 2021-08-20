import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useDispatch, useSelector } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import { Link } from "react-router-dom";
import { donorDelete } from "../../../redux/action/donor.action";

const { SearchBar } = Search;

const TableDonor = (props) => {
  const { getDonorList, errorMessage } = useSelector((state) => state.donor);
  //   const dispatch = useDispatch();

  const dispatch = useDispatch();
  const HandleDelete = (id) => {
    dispatch(donorDelete(id));
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
      dataField: "description",
      text: "Description",
      sort: true,
    },
    {
      dataField: "profession",
      text: "Profession",
      sort: true,
    },
    {
      dataField: "education",
      text: "Education",
      sort: true,
    },
    {
      dataField: "city",
      text: "City",
      sort: true,
    },
    {
      dataField: "country",
      text: "Country",
      sort: true,
    },
    {
      dataField: "state",
      text: "State",
      sort: true,
    },
    {
      dataField: "religion",
      text: "Religion",
      sort: true,
    },
    {
      dataField: "categoryblood",
      text: "Categoryblood",
      sort: true,
    },
    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"/admin/donor/update/" + row.id}>
              <button className="btn btn-primary btn-sm mr-2">
                <i className="fa fa-edit"></i> Edit
              </button>
            </Link>

            <button
              className="btn btn-danger btn-sm mr-2"
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
      {getDonorList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={getDonorList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <div className="row">
                <div className="container">
                  <Link to="/admin/donor/create">
                    <button className="btn btn-dark mr-5">
                      <i className="fa fa-user"></i> Create Donor
                    </button>
                  </Link>
                </div>
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

export default TableDonor;

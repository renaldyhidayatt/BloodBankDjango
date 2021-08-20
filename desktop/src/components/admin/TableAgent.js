import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useDispatch, useSelector } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import { Link } from "react-router-dom";
import { AgentDelete } from "../../redux/action/agent.action";

const { SearchBar } = Search;

const TableAgent = (props) => {
  const { getAgentList, errorMessage } = useSelector((state) => state.agent);
  //   const dispatch = useDispatch();

  const dispatch = useDispatch();
  const HandleDelete = (id) => {
    dispatch(AgentDelete(id));
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
      dataField: "email",
      text: "Email",
      sort: true,
    },
    {
      dataField: "designation",
      text: "Designation",
      sort: true,
    },
    {
      dataField: "organization",
      text: "Organization",
      sort: true,
    },
    {
      dataField: "city",
      text: "City",
      sort: true,
    },
    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"/admin/agent/update/" + row.id}>
              <button className="btn btn-primary mr-2">
                <i className="fa fa-edit"></i> Edit
              </button>
            </Link>

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
      {getAgentList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={getAgentList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <div className="row">
                <div className="container">
                  <Link to="/admin/agent/create">
                    <button className="btn btn-dark mr-5">
                      <i className="fa fa-user"></i> Create Agent
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

export default TableAgent;

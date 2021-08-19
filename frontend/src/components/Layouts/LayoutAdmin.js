import Sidebar from "../admin/Sidebar";
import Navbar from "../admin/Navbar";

const LayoutAdmin = (props) => {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div className="content">
          <Navbar />
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;

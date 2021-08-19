const LayoutAuthRegis = (props) => {
  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 mx-auto">
          <div className="card  shadow-lg my-5">
            <div className="card-header">{props.title}</div>
            <div className="card-body">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutAuthRegis;

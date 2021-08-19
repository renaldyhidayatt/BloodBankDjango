const FormAuth = (props) => {
  const login = props.Login;
  return (
    <div>
      {login ? (
        <form className="user" onSubmit={props.HandleSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-user"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter Email Address..."
              value={props.email}
              onChange={props.onChangeEmaail}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-user"
              id="exampleInputPassword"
              placeholder="Password"
              value={props.password}
              onChange={props.onChangePassword}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-user btn-block">
            Login
          </button>
        </form>
      ) : (
        <form className="user" onSubmit={props.HandleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-user"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter Username"
              value={props.username}
              onChange={props.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-user"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter Email Address..."
              value={props.email}
              onChange={props.onChangeEmaail}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-user"
              id="exampleInputPassword"
              placeholder="Password"
              value={props.password}
              onChange={props.onChangePassword}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-user btn-block">
            Register
          </button>
        </form>
      )}
    </div>
  );
};

export default FormAuth;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { signIn } from "../redux/action/auth.action";

function LoginPage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const history = useHistory();

    const onChangeEmaail = (e) => {
        const email = e.target.value;
        setEmail(email)
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password)
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(signIn(email, password))
        history.push("/dashboard")
    }

    return(
        <div className="container my-3">
            <div className="row">
                <div className="col-lg-6 col-md-8 mx-auto">
            <div className="card">
              <div className="card-header">Sign-in</div>
              <div className="card-body">
                <form onSubmit={HandleSubmit}>
                  {/* Email */}
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      placeholder="Your email"
                      className="form-control"
                      value={email}
                      onChange={onChangeEmaail}
                    />
                  </div>
                  {/* password */}
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      placeholder="Your password"
                      className="form-control"
                      value={password}
                      onChange={onChangePassword}
                    />
                  </div>
                  <button
                    
                    className="btn btn-success"
                  >
                    Sign-in
                  </button>
                  <span className="small text-muted d-block mt-2">
                    Not yet registered yet?
                    <Link to="/register"> Register now</Link>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default LoginPage;
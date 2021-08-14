import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/action/auth.action";
import { Link} from 'react-router-dom'

function RegisterPage(){
    const  [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    }

    const onChangeEmaail = (e) => {
        const email = e.target.value;
        setEmail(email)
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password)
    }
    const HandleRegister = (e) => {
        e.preventDefault();
        const newUser = {
            username: username,
            email: email,
            password: password
        }

        dispatch(signUp(newUser));
    }

    return(
        <div className="container my-3">
        <div className="row">
          <div className="col-lg-6 col-md-8 mx-auto">
            <div className="card">
              <div className="card-header">Sign-up</div>
              <div className="card-body">
                <form onSubmit={HandleRegister}>
                  {/* Name */}
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your complete name"
                      className="form-control"
                      value={username}
                      onChange={onChangeUsername}
                    />
                  </div>
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
                    Sign-up
                  </button>
                  <span className="small text-muted d-block mt-2">
                    Already have an account?
                    <Link to="/login"> Login now</Link>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default RegisterPage;
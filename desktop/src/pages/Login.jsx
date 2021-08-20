import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import LayoutAuthRegis from "../components/Layouts/LayoutAuthRegis";
import { signIn } from "../redux/action/auth.action";
import FormAuth from "../components/formAuth/formAuth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const auth = useSelector((state) => state.auth);

  const onChangeEmaail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    dispatch(signIn(email, password));
    history.push("/dashboard");
  };

  if (auth.isLoggedIn === true) {
    history.push("/dashboard");
  }
  return (
    <LayoutAuthRegis title="Login">
      <FormAuth
        Login={true}
        HandleSubmit={HandleSubmit}
        email={email}
        onChangeEmaail={onChangeEmaail}
        password={password}
        onChangePassword={onChangePassword}
      />
    </LayoutAuthRegis>
  );
}

export default LoginPage;

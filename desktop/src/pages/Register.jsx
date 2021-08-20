import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/action/auth.action";
import LayoutAuthRegis from "../components/Layouts/LayoutAuthRegis";
import FormAuth from "../components/formAuth/formAuth";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmaail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const HandleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      email: email,
      password: password,
    };

    dispatch(signUp(newUser));
  };

  return (
    <LayoutAuthRegis title="register">
      <FormAuth
        login={false}
        HandleSubmit={HandleRegister}
        username={username}
        onChangeUsername={onChangeUsername}
        email={email}
        onChangeEmaail={onChangeEmaail}
        password={password}
        onChangePassword={onChangePassword}
      />
    </LayoutAuthRegis>
  );
}

export default RegisterPage;

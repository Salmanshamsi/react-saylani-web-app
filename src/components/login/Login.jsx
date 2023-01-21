import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { app } from "../../Config/Config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./login.css";

const Login = () => {
  
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/home");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    } else {
      swal({
        title: "Oops!",
        text: `Fill All Data`,
        icon: "warning",
        dangerMode: true,
      });
    }
  };

  return (
    <div className=".body">
      <div className="main">
        <div className="contanier">
          <div className="col-a">
            <img src="imges" alt="" />
          </div>
          <div className="col-b">
            {/* <h1 className="login" onClick={handleSubmit}>Login</h1> */}
            <div className="form-box">
            <form>
              <input
                type="email"
                id="email"
                placeholder="EMAIL ADDRESS"
                className="inp-a"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                id="password"
                placeholder="PASSWORD"
                className="inp-b"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div className="cont">
                <button onClick={handleSubmit} className="btn-a">Login</button>
              </div>
              <a href="/" className="a1">
                forget password?
              </a>
              <a href="/" className="a2">
                        create new account
              </a>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

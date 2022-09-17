import React, { useState, useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);
  const handleToken = (credentialResponse) => {
    console.log(credentialResponse);
    const results = axios.post(
      `${process.env.REACT_APP_API_URL + "/api/login"}`,
      credentialResponse
    );
    console.log(results);
    if (results.status === 200 || results.status === 409) {
      localStorage.setItem("userToken", credentialResponse.credential);
      setIsAuth(true);
    } else {
      setLoginFailed(true);
    }
  };
  if (isAuth) {
    return <Navigate to="/Home" />;
  }
  if (loginFailed) {
    return (
      <div>
        <h3>Login Failed</h3>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            handleToken(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          useOneTap
        />
      </div>
    );
  }
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        handleToken(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
      useOneTap
    />
  );
};

export { Login };
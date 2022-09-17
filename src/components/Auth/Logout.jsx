import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import { AuthContext } from "../../contexts/AuthContext";
import { useEffect } from "react";

const Logout = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  useEffect(() => {
    localStorage.clear("userID");
    googleLogout();
    setIsAuth(false);
  });
  if (!isAuth) {
    return <Navigate to="/Home" />;
  }
  return <div>Logout</div>;
};

export { Logout };

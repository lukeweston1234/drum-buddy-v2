import React, { useState, createContext } from "react";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    const token = localStorage.getItem("userToken");
    if (token !== null) {
      const decoded = jwt_decode(token);
      if (Date.now() > decoded.exp * 1000) {
        localStorage.removeItem("userToken");
        localStorage.removeItem("userID");
        return false;
      }
      return true;
    }
    return false;
  });
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

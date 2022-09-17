import React, { useContext } from "react";
import { Link, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { Explore } from "./components/Explore";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";
import { Login } from "./components/Auth/Login";
import { Logout } from "./components/Auth/Logout";
import { AuthContext } from "./contexts/AuthContext";
import "./styles/App.css";

function App() {
  const { isAuth } = useContext(AuthContext);
  let location = useLocation();
  return (
    <>
      <div className="App">
        <div className="header">
          <h1 className="logo">Drumbuddy</h1>
          <nav className="nav-wrapper">
            <ul className="nav-bar">
              <li className={"nav-element"}>
                <Link
                  className={
                    location.pathname === "/Home"
                      ? "active-nav-text"
                      : "nav-text"
                  }
                  to="/Home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-element">
                <Link
                  className={
                    location.pathname === "/Explore"
                      ? "active-nav-text"
                      : "nav-text"
                  }
                  to="/Explore"
                >
                  Explore
                </Link>
              </li>
              {isAuth && (
                <li className="nav-element">
                  <Link
                    className={
                      location.pathname === "/Profile"
                        ? "active-nav-text"
                        : "nav-text"
                    }
                    to="/Profile"
                  >
                    Profile
                  </Link>
                </li>
              )}
              {!isAuth && (
                <li className="nav-element">
                  <Link
                    className={
                      location.pathname === "/Login"
                        ? "active-nav-text"
                        : "nav-text"
                    }
                    to="/Login"
                  >
                    Login
                  </Link>
                </li>
              )}
              {isAuth && (
                <li className="nav-element">
                  <Link
                    className={
                      location.pathname === "/Logout"
                        ? "active-nav-text"
                        : "nav-text"
                    }
                    to="/Logout"
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <hr className="nav-divider"></hr>
      </div>
      <Routes>
        <Route path="/" element={<Navigate replace to={"/Home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;

import React, { useContext } from "react";
import { Link, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";
import { Login } from "./components/Auth/Login";
import { Logout } from "./components/Auth/Logout";
import { Sequence } from "./components/Sequence";
import { AuthContext } from "./contexts/AuthContext";
import "./styles/App.css";

function App() {
  const { isAuth } = useContext(AuthContext);
  let location = useLocation();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="header">
          <h1 className="logo">Drumbuddy</h1>
          <nav className="nav-wrapper">
            <Link
              className={
                location.pathname === "/Home" ? "active-nav-text" : "nav-text"
              }
              to="/Home"
            >
              Home
            </Link>

            {isAuth && (
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
            )}
            {!isAuth && (
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
            )}
            {isAuth && (
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
            )}
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Navigate replace to={"/Home"} />} />
          <Route path="/sequence" element={<Navigate replace to={"/Home"} />} />
          <Route path="/sequence/:sequenceId" element={<Sequence />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;

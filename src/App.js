import { Link, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { Explore } from "./components/Explore";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";
import "./styles/App.css";

function App() {
  let location = useLocation();
  console.log(location.pathname);
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
            </ul>
          </nav>
        </div>
        <hr className="nav-divider"></hr>
      </div>
      <Routes>
        <Route path="/" element={<Navigate replace to={"/Home"} />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;

import { Link } from "react-router-dom";
import "./Navbar.css";
//hooks
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const { auth } = useAuth();
  const { user } = useSelector((state) => state.auth);
  return (
    <nav id="navbar">
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="center">
          {auth ? (
            <>
              <li>
                <h3>
                  <Link to="/">Home</Link>
                </h3>
              </li>
              {user && (
                <li>
                  <h3>
                    <Link to={`/profile/${user._id}`}>Perfil</Link>
                  </h3>
                </li>
              )}
              <li>
                <h3>
                  <Link to="/logout">Logout</Link>
                </h3>
              </li>
            </>
          ) : (
            <>
              <li>
                <h3>
                  <Link to="/login">Login</Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link to="/register">Registro</Link>
                </h3>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

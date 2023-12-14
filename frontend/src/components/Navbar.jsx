import { Link } from "react-router-dom";
import "./Navbar.css";
//hooks
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logoutAdmin, reset } from "../slices/authSlice";

const Navbar = () => {
  const { auth } = useAuth();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAdmin());
    dispatch(reset());
    navigate("/");
  };
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
                <span>
                  <button onClick={handleLogout}>Logout</button>
                </span>
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

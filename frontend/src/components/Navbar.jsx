import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="center">
          <li>
            <h3>
              <Link to="/">Home</Link>
            </h3>
          </li>
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

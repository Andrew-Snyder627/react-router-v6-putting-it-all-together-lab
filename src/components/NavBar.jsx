import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      {/* Highlights active tab using NavLink */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default NavBar;

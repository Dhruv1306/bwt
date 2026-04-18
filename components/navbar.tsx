import { NavLink } from "react-router-dom";
import "../component.css";

export function navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link" } end > Home </NavLink> </li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link" } > About </NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link" } > Contact </NavLink> </li>
      </ul>
    </nav>
  );
}
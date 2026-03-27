'use client';
import { AppThemeContext } from "./../context/AppThemeContext";
import {Link} from "react-router-dom";
import { useContext } from "react";

export default function AppBar() {

  const theme = useContext(AppThemeContext);
  function toggleTheme() {
    theme.changeMode(theme.mode === "light" ? "dark" : "light");
  }

  return (
        <nav className={`navbar navbar-dark bg-${theme.mode}`}>
  <div className="container-fluid">
    <Link className="nav-link" to="/">Next.js</Link>
    <ul className="nav">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/about">About</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/login">Login</Link>
  </li>
   <li className="nav-item">
    <Link className="nav-link" to="/products">Products</Link>
  </li>
   <li className="nav-item">
    <Link className="nav-link" to="/gadgets">Gadgets</Link>
  </li>
   <li className="nav-item">
    <Link className="nav-link" to="/view-cart">View Cart</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/customers">Customers</Link>
  </li>
   <li className="nav-item">
    <Link className="nav-link" to="/suppliers">Suppliers</Link>
  </li>
  <li className="nav-item">
   <button className="btn btn-sm btn-warning" onClick={toggleTheme}>Toggle Theme</button>
  </li>
 
</ul>
    </div>
</nav>
    )
            }
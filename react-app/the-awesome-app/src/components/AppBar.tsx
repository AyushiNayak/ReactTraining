'use client';
import { AppThemeContext } from "@/context/AppThemeContext";
import Link from "next/link";
import { useContext } from "react";

export default function AppBar() {

  const theme = useContext(AppThemeContext);
  function toggleTheme() {
    theme.changeMode(theme.mode === "light" ? "dark" : "light");
  }

  return (
        <nav className={`navbar navbar-dark bg-${theme.mode}`}>
  <div className="container-fluid">
    <Link className="nav-link" href="/">Next.js</Link>
    <ul className="nav">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" href="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="/about">About</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="/login">Login</Link>
  </li>
   <li className="nav-item">
    <Link className="nav-link" href="/products">Products</Link>
  </li>
   <li className="nav-item">
    <Link className="nav-link" href="/gadgets">Gadgets</Link>
  </li>
   <li className="nav-item">
    <Link className="nav-link" href="/view-cart">View Cart</Link>
  </li>
  <li className="nav-item">
   <button className="btn btn-sm btn-warning" onClick={toggleTheme}>Toggle Theme</button>
  </li>
 
</ul>
    </div>
</nav>
    )
            }
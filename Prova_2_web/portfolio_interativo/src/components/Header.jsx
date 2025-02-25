import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

// Componente de navegação do site
function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projetos</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
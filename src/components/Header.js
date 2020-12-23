import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-warning bg-warning">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/list" className="nav-link">
              List
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/cadastro" className="nav-link">
              Cadastro
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

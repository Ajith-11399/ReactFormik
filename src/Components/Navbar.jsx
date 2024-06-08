import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="box">
      <nav className="navbar navbar-expand-lg bg-drk">
        <div className="container-fluid">
          <Link to="/#" className="navbar-brand text-light">
            RISE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link text-light active">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/books" className="nav-link text-light">
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link text-light">
                  Add Book
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

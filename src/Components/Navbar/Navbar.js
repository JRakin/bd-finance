import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Deposits
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Loans
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Investor Relations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/sohayota">
                Sohayota
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

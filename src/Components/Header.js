import React from "react";

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section className="navbarr">
        <nav className="navbar navbar-expand-lg border-bottom">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                src={require("../images/logo.png")}
                alt="logo"
                width={"100px"}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link  me-4" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" to="/aboutus">
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" to="/contact">
                    Contact us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" to="/menu">
                    Menu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" to="/order">
                    Order
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" to="/cart">
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Header;

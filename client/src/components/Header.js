import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light ">
        <Link
          className="navbar-brand d-flex h-20 align-items-center"
          style={{ color: "#835E8C" }}
          to="/"
        >
          <i className="fa fa-twitch mr-2 fa-2x" aria-hidden="true" />
          Clone
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item ">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/streams/show">
                All Streams
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/streams/new">
                Create
              </Link>
            </li>
          </ul>
          <div className="pr-4 pt-1">
            <GoogleAuth />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <>
        <div id="flex-container">
          <header className="d-flex flex-wrap justify-content-end justify-content-right py-3 mb-4 border-bottom">
            <div className="nav col-12 col-md-auto mb-2 justify-content-right mb-md-0">
            <NavLink
                className="nav-link px-2"
                to={`/`}
              >
                Home
              </NavLink>
            </div>
          </header>
        </div>
    </>
  );
}

export default Header;
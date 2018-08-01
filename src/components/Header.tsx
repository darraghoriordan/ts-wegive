import * as React from "react";
import { NavLink } from "react-router-dom";
class Header extends React.Component {
  public render() {
    return (
      <header className="Header-header">
        <h1 className="Header-h1">We give Example</h1>
        <nav className="Header-nav">
          <NavLink
            exact={true}
            to="/"
            className="Header-navLink"
            activeClassName="Header-isActive"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="Header-navLink"
            activeClassName="Header-isActive"
          >
            About
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;

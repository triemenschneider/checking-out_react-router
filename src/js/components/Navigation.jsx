import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ul className="navigation">
        <li>
          <NavLink exact to="/">
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/form">form</NavLink>
        </li>
        <li>
          <NavLink to="/github">github</NavLink>
        </li>
      </ul>
    );
  }
}

export default Navigation;

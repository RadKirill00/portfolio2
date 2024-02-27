import React from "react";
import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normal = "nav-list__link";

  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <NavLink to="/" className="logo">
              <strong>Freelancer</strong> portfolio
            </NavLink>

            <button className="dark-mode-btn">
              <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
              <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
            </button>

            <ul className="nav-list">
              <li className="nav-list__item">
                <NavLink to="/" className={({isActive}) => {
                  return isActive ? activeLink : normal
                }}>
                  Home
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink to="/projects" className={({isActive}) => {
                  return isActive ? activeLink : normal
                }}>
                  Projects
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink to="/contacts" className={({isActive}) => {
                  return isActive ? activeLink : normal
                }}>
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

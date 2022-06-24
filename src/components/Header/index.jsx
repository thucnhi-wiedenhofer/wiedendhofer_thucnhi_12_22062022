import React from 'react';
import './header.css';
import { NavLink, Link } from 'react-router-dom';
import logo from './../../assets/images/logo.svg';

function Header() {
  let id = JSON.parse(sessionStorage.getItem('idUser'));
  return (
    <div id="header" className="navbar navbar-expand-lg">
      <Link to="/">
        <span className="navbar-brand">
          <img src={logo} alt="logo SportSee" width="210" height="61" />
        </span>
      </Link>

      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to={`/`}
              className={(nav) =>
                nav.isActive ? 'nav-item active' : 'nav-item'
              }
            >
              Accueil
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to={`/${id.id}`}
              className={(nav) =>
                nav.isActive ? 'nav-item active' : 'nav-item'
              }
            >
              Profil
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={`/${id.id}`}
              className={(nav) =>
                nav.isActive ? 'nav-item active' : 'nav-item'
              }
            >
              Réglage
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={`/${id.id}`}
              className={(nav) =>
                nav.isActive ? 'nav-item active' : 'nav-item'
              }
            >
              Communauté
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

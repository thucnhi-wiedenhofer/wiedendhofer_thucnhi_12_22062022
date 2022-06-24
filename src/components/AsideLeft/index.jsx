import React from 'react';
import { NavLink } from 'react-router-dom';
import './asideLeft.css';
import yoga_icon from './../../assets/images/yoga_icon.svg';
import swim_icon from './../../assets/images/swim_icon.svg';
import bike_icon from './../../assets/images/bike_icon.svg';
import gym_icon from './../../assets/images/gym_icon.svg';

function AsideLeft() {
  return (
    <div className="navbar">
      <ul className="navbar-nav">
        <li className="activity">
          <NavLink to="">
            <img
              src={yoga_icon}
              alt="yoga icone button navigation"
              width="64"
              height="64"
            />
          </NavLink>
        </li>

        <li className="activity">
          <NavLink to="">
            <img
              src={swim_icon}
              alt="swim icone button navigation"
              width="64"
              height="64"
            />
          </NavLink>
        </li>
        <li className="activity">
          <NavLink to="">
            <img
              src={bike_icon}
              alt="bike icone button navigation"
              width="64"
              height="64"
            />
          </NavLink>
        </li>
        <li className="activity">
          <NavLink to="">
            <img
              src={gym_icon}
              alt="gym icone button navigation"
              width="64"
              height="64"
            />
          </NavLink>
        </li>
      </ul>
      <span className="copyright">Copiryght, SportSee 2020</span>
    </div>
  );
}

export default AsideLeft;

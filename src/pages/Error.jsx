import React from 'react';
import { NavLink } from 'react-router-dom';
import AsideLeft from '../components/AsideLeft';
import Header from '../components/Header';
import '../styles/main.css';

/**
 * @description first page for simulating connection of user
 * @returns { React.ReactElement }
 */

function Error() {
  return (
    <div className="fluid-container">
      <Header />
      <div className="row col-lg-12">
        <div className="aside-left col-lg-1">
          <AsideLeft />
        </div>
        <div className="container col-lg-11">
          <div className="center col-lg-12">
            <h1>ERROR</h1>
            <h2 className="mt-5">
              Only Profiles enable for connection are:
              <br />
              <NavLink to={'/12'}>
                <h3 className="mt-5">Karl</h3>
              </NavLink>
              <br />
              <NavLink to={'/18'}>
                <h3>Cecilia</h3>
              </NavLink>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;

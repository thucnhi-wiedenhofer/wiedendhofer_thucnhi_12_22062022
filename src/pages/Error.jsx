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
        <div className="col-lg-1">
          <AsideLeft />
        </div>
        <div className="col-lg-11">
          <h1>Error</h1>

          <div className="col-lg-12">
            <h1>
              Only Profiles enable for connection are:
              <br />
              <NavLink to={'/12'}>
                <h2>Karl</h2>
              </NavLink>
              <br />
              <NavLink to={'/18'}>
                <h2>Cecilia</h2>
              </NavLink>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;

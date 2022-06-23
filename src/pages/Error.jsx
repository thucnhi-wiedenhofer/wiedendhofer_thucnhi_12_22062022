import React from 'react';
import { NavLink } from 'react-router-dom';
import AsideLeft from '../components/AsideLeft';
import Header from '../components/Header';

/**
 * @description first page for simulating connection of user
 * @returns { React.ReactElement }
 */

function Error() {
  return (
    <div className="global container">
      <Header />
      <div className="row col-lg-12">
        <div className="col-lg-1">
          <AsideLeft />
        </div>
        <div className="frame col-lg-11">
          <h1 className="red">Error</h1>

          <div className="col-lg-12">
            <h1 className="medium">
              Only Profiles enable for connection are:
              <br />
              <NavLink to={'/12'} className="neutre red">
                <h2 className="medium">Karl</h2>
              </NavLink>
              <br />
              <NavLink to={'/18'} className="neutre red">
                <h2 className="medium">Cecilia</h2>
              </NavLink>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;

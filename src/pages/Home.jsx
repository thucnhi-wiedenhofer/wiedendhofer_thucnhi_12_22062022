import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import AsideLeft from '../components/AsideLeft';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Activity from '../components/Activity';
import Average from '../components/Average';
import Performance from '../components/Performance';
import Score from '../components/Score';
import KeyData from '../components/KeyData';
import '../styles/main.css';

/**
 * @description Generate home page with context providers, and components
 * useFetch control if the API is connected
 * @returns { React.ReactElement }
 */

function Home() {
  sessionStorage.clear();
  const id = useParams();
  let { data, error, isPending, env } = useFetch(
    process.env.REACT_APP_API_URL + `/${id.id}`
  );

  if (data !== null) {
    sessionStorage.setItem('idUser', JSON.stringify(id));
  }
  if (env === 'local') {
    sessionStorage.setItem('env', JSON.stringify(env));
  }
  return (
    <div className="fluid-container">
      {isPending && (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      )}
      {error && <div>{error}</div>}
      {data && (
        <>
          <Header />
          <div className="row col-lg-12">
            <div className="col-lg-1">
              <AsideLeft />
            </div>
            <div className="col-lg-11">
              <Heading />
              <div className="row col-lg-12">
                <div className="col-lg-9">
                  <div className="histo col-lg-12">
                    <Activity />
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <Average />
                    </div>
                    <div className="col-lg-4">
                      <Performance />
                    </div>
                    <div className="col-lg-4">
                      <Score />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <KeyData />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;

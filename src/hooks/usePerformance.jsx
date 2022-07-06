import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const usePerformance = () => {
  const [userPerformance, setUserPerformance] = useState();

  let idUser = JSON.parse(sessionStorage.getItem('idUser'));
  let env = JSON.parse(sessionStorage.getItem('env'));
  let url = null;

  if (env !== 'local') {
    url = process.env.REACT_APP_API_URL + `/${idUser.id}/performance`;
  } else if (env === 'local' && (idUser.id === '12' || idUser.id === '18')) {
    url = `data/performance_${idUser.id}.json`;
  } else {
    url = `data/performance_12.json`;
  }

  useEffect(() => {
    const getUserPerformance = async () => {
      try {
        const { data } = await axios.get(url);
        setUserPerformance(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserPerformance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { userPerformance };
};

export default usePerformance;

usePerformance.propType = {
  userPerformance: PropTypes.object.isRequired,
};

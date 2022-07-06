import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const useAverageSession = () => {
  const [userAverageSession, setUserAverageSession] = useState();

  let idUser = JSON.parse(sessionStorage.getItem('idUser'));
  let env = JSON.parse(sessionStorage.getItem('env'));
  let url = null;

  if (env !== 'local') {
    url = process.env.REACT_APP_API_URL + `/${idUser.id}/average-sessions`;
  } else if (env === 'local' && (idUser.id === '12' || idUser.id === '18')) {
    url = `data/average_${idUser.id}.json`;
  } else {
    url = `data/average_12.json`;
  }

  useEffect(() => {
    const getUserAverageSession = async () => {
      try {
        const { data } = await axios.get(url);
        setUserAverageSession(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserAverageSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { userAverageSession };
};

export default useAverageSession;

useAverageSession.propType = {
  userAverageSession: PropTypes.object.isRequired,
};

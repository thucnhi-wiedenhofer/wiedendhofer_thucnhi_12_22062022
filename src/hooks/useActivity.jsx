import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const useActivity = () => {
  const [userActivity, setUserActivity] = useState();

  let idUser = JSON.parse(sessionStorage.getItem('idUser'));
  let env = JSON.parse(sessionStorage.getItem('env'));
  let url = null;

  if (env !== 'local') {
    url = process.env.REACT_APP_API_URL + `/${idUser.id}/activity`;
  } else if (env === 'local' && (idUser.id === '12' || idUser.id === '18')) {
    url = `data/activity_${idUser.id}.json`;
  } else {
    url = `data/activity_12.json`;
  }

  useEffect(() => {
    const getUserActivity = async () => {
      try {
        const { data } = await axios.get(url);
        setUserActivity(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserActivity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { userActivity };
};

export default useActivity;

useActivity.propType = {
  userActivity: PropTypes.object.isRequired,
};

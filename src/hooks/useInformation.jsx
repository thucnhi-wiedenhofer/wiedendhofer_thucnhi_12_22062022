import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const useInformation = () => {
  const [user, setUser] = useState();

  let idUser = JSON.parse(sessionStorage.getItem('idUser'));
  let env = JSON.parse(sessionStorage.getItem('env'));
  let url = null;

  if (env !== 'local') {
    url = process.env.REACT_APP_API_URL + `/${idUser.id}`;
  } else (env === 'local' && (idUser.id === '12' || idUser.id === '18')) {
    url = `data/user_${idUser.id}.json`;
  }

  const getUser = async () => {
    try {
      const { data } = await axios.get(url);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user };
};

export default useInformation;

useInformation.propType = {
  user: PropTypes.object.isRequired,
};

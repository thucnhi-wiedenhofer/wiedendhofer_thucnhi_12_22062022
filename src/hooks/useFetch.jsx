import { useState, useEffect } from 'react';

/**
 *  @description hook for verifying the state of API.
 * if API is disconnected, put env to local
 * ,without breaking the application.
 * @returns { data, isPending, error, env }
 */

function useFetch(url) {
  const [data, setData] = useState(null);
  const [env, setEnv] = useState('remote');
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          } else if (err.message === 'Failed to fetch') {
            setIsPending(false);
            setEnv('local');
            setData('local');
            setError(null);
          } else {
            // auto catches network / connection error
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error, env };
}

export default useFetch;
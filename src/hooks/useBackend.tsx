import { useEffect, useState } from 'react';

import api from '../services/api';

const useBackend = async () => {
  const [data, setData] = useState();

  useEffect(() => {
    api.get('users').then((response) => setData(response.data));
  }, []);

  return { data };
};

export default useBackend;

import { useEffect, useState } from 'react';

import api from '../services/api';

type User = {
  created_at: string;
  email: string;
  id: string;
  name: string;
  password: string;
};

const useBackend = async () => {
  const [data, setData] = useState<User[]>();

  useEffect(() => {
    api.get('users').then((response) => setData(response.data));
  }, []);

  return data;
};

export default useBackend;

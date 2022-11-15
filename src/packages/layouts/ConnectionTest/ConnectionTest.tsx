import React, { useEffect, useState } from 'react';

import api from '../../../services/api';

type User = {
  created_at: string;
  email: string;
  id: string;
  name: string;
  password: string;
};

function ConnectionTest() {
  const [users, setUsers] = useState<User[]>();

  async function getAll() {
    const { data } = await api.get('users');
    return data;
  }

  useEffect(() => {
    getAll().then((response) => {
      setUsers(response);
    });
  }, []);

  return (
    <ul>
      {users?.map((user) => {
        return <li key={user.name}>{user.name}</li>;
      })}
    </ul>
  );
}

export default ConnectionTest;

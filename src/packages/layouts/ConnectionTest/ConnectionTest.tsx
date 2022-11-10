import React from 'react';

import axios from 'axios';

import { Button } from '../../ui-kit/Button';

function ConnectionTest() {
  async function getAll() {
    const response = axios.get('http://192.168.18.247:5000/users');
    // eslint-disable-next-line no-console
    console.log(response);
  }

  return <Button onClick={() => getAll()}>APERTE EM MIM</Button>;
}

export default ConnectionTest;

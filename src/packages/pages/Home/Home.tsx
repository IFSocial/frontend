import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';
import { Button } from '../../ui-kit/Button';
import * as C from './styles';

function Home() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>Home</C.Title>
      <Button onClick={() => [logout(), navigate('/')]}>Sair</Button>
    </C.Container>
  );
}

export default Home;

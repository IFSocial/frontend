import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Alert } from '@mui/material';

import { useAuth } from '../../../hooks/useAuth';
import { Button } from '../../ui-kit/Button';
import Input from '../../ui-kit/Input/Input';
import * as C from './styles';

function Signin() {
  const { authenticate } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!email || !senha) {
      setError('Preencha todos os campos');
      return;
    }
    try {
      await authenticate(email, senha);
      navigate('/home');
    } catch {
      <Alert severity="error" color="error">
        E-mail ou senha incorretos
      </Alert>;
    }
  };

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError('');
          }}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
            setError('');
          }}
        />
        <C.labelError>{error}</C.labelError>
        <Button onClick={handleLogin}>Entrar</Button>
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
}

export default Signin;

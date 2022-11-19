import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Alert } from '@mui/material';

import { useAuth } from '../../../hooks/useAuth';
import { Button } from '../../ui-kit/Button';
import Input from '../../ui-kit/Input/Input';
import * as C from './styles';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailConf, setEmailConf] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!name || !email || !emailConf || !senha) {
      setError('Preencha todos os campos');
      return;
    }
    if (email !== emailConf) {
      setError('Os e-mails não são iguais');
      return;
    }
    try {
      signup(name, email, senha);

      navigate('/');

      <Alert severity="success" color="success">
        Usuário cadatrado com sucesso!
      </Alert>;
    } catch (e) {
      <Alert severity="error" color="error">
        {e as string}
      </Alert>;
    }
  };

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
        <Input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => {
            setEmailConf(e.target.value);
          }}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
          }}
        />
        <C.labelError>{error}</C.labelError>
        <Button onClick={handleSignup}>Inscrever-se</Button>
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
}

export default Signup;

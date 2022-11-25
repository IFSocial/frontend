import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Box, Button, Grid, Link, TextField } from '@mui/material';

import { useAuth } from '../../../hooks/useAuth';
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
      setError('E-mail ou senha incorretos');
    }
  };

  return (
    <Grid
      container
      height="100vh"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Grid
        container
        item
        xs={12}
        sm={5}
        direction="column"
        justifyContent="center"
        alignItems="center"
        fontFamily="Helvetica"
        height="100%"
        bgcolor="#094300"
      >
        <Box maxWidth="400px">
          <C.Title>BEM-VINDO A SEMADEC</C.Title>
          <C.Subtitle>DATA_DO_EVENTO</C.Subtitle>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={7}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        minWidth="400px"
      >
        <Box
          p="20px"
          gap="15px"
          borderRadius="5px"
          boxShadow="0 1px 2px #0003"
          maxWidth="350px"
        >
          <AccountCircleIcon style={{ fontSize: 150, color: '#399E29' }} />
          <C.Subtitle style={{ color: '#399E29', fontFamily: 'Helvetica' }}>
            Faça o seu login
          </C.Subtitle>

          <TextField
            label="E-mail escolar"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            type="password"
            label="Digite sua senha"
            variant="outlined"
            fullWidth
            value={senha}
            margin="normal"
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />
          <C.labelError>{error}</C.labelError>
          <Box textAlign="end" width="100%">
            <Button
              itemID="entrar"
              variant="contained"
              color="success"
              onClick={handleLogin}
            >
              Entrar
            </Button>
          </Box>
        </Box>
        <Box>
          <p style={{ color: '#399E29' }}> Ainda não tem uma conta? </p>
          <Button
            itemID="cadastrar"
            variant="contained"
            color="success"
            onClick={() => {
              navigate('/signup');
            }}
          >
            Criar uma conta
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Signin;

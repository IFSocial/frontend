import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Alert, Box, Button, Grid, TextField } from '@mui/material';

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
      <Alert severity="error" color="error">
        E-mail ou senha incorretos
      </Alert>;
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
        height="100%"
        bgcolor="#d3d3d3"
      >
        <Box maxWidth="400px">
          <C.Title>BEM-VINDO A SEMADEC</C.Title>
          <C.Subtitle>DATA_DO_EVENTO</C.Subtitle>
          <Button
            variant="contained"
            onClick={() => {
              navigate('/signup');
            }}
          >
            Cadastrar-se
          </Button>
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
          <AccountCircleIcon style={{ fontSize: 150 }} />

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
            label="Digite sua Senha"
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
            <Button variant="contained" onClick={handleLogin}>
              Entrar
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Signin;

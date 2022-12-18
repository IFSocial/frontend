import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Grid, TextField } from '@mui/material';

import logo from '../../../assets/logo.png';
import { useAuth, useHome } from '../../../hooks';
import {
  CustomGridLeft,
  Subtitle,
  Title,
  LabelError,
  CustomImage,
  CustomIcon,
  CustomText,
  CustomButton1,
  CustomButton2,
} from './styles';

function Signin() {
  const { authenticate } = useAuth();
  const { date } = useHome();
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

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (event.key === 'Enter') {
      handleLogin();
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
      <title>Semadec - Login</title>
      <CustomGridLeft
        container
        item
        xs={12}
        sm={12}
        md={5}
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Box maxWidth="500px">
          <Title>BEM-VINDO À SEMADEC</Title>
          <Subtitle>{date}</Subtitle>
          <CustomImage src={logo} alt="logo" />
        </Box>
      </CustomGridLeft>
      <Grid
        item
        xs={12}
        sm={12}
        md={7}
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
          <CustomIcon style={{ fontSize: 150 }} />
          <Subtitle>Login</Subtitle>

          <TextField
            data-testid="inputEmail"
            label="E-mail escolar"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onKeyPress={(e) => {
              handleKeyPress(e);
            }}
          />
          <TextField
            data-testid="inputSenha"
            type="password"
            label="Digite sua senha"
            variant="outlined"
            fullWidth
            value={senha}
            margin="normal"
            onChange={(e) => {
              setSenha(e.target.value);
            }}
            onKeyPress={(e) => {
              handleKeyPress(e);
            }}
          />
          <LabelError data-testeid="loginErro">{error}</LabelError>
          <Box textAlign="end" width="100%">
            <CustomButton1
              data-testid="btnEntrar"
              variant="contained"
              onClick={handleLogin}
            >
              Entrar
            </CustomButton1>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="end">
          <CustomText>Ainda não tem uma conta?</CustomText>
          <CustomButton2
            data-testid="btnCadastrar"
            variant="contained"
            onClick={() => {
              navigate('/signup');
            }}
          >
            Criar uma conta
          </CustomButton2>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Signin;

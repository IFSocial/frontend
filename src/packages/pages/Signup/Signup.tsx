import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Visibility, VisibilityOff } from '@material-ui/icons';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';

import logo from '../../../assets/logo.png';
import { useAuth, useHome } from '../../../hooks';
import {
  CustomButton1,
  CustomButton2,
  CustomGridLeft,
  CustomIcon,
  CustomImage,
  CustomText,
  LabelError,
  Subtitle,
  Title,
} from '../Signin/styles';

const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConf, setSenhaConf] = useState('');
  const [sexo, setSexo] = useState('');
  const [error, setError] = useState('');
  const [passIsVisible, setPassIsVisible] = useState<boolean>(false);
  const [passConfIsVisible, setPassConfIsVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  const { signup } = useAuth();
  const { date } = useHome();

  const handleSignup = async () => {
    if (!email.match(emailRegex)) {
      setError('Digite um email válido!');
      return;
    }
    if (!name || !email || !matricula || !senha || !sexo) {
      setError('Preencha todos os campos');
      return;
    }
    if (senha !== senhaConf) {
      setError('As senhas não coincidem');
      return;
    }
    if (senha.length < 4) {
      setError('A senha tem que ter 4 ou mais caracteres');
      return;
    }
    try {
      await signup(name, matricula, sexo, email, senha);

      // eslint-disable-next-line no-alert
      alert('Usuário cadatrado com sucesso!');

      navigate('/');
    } catch (err) {
      setError('Algo deu errado');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSexo((event.target as HTMLInputElement).value);
  };

  return (
    <Grid
      container
      height="100vh"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <title>Semadec - Cadastre-se</title>
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
          <CustomText>Criar uma conta</CustomText>
          <TextField
            data-testid="nome"
            label="Nome"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            margin="dense"
          />
          <TextField
            data-testid="matricula"
            label="Matricula"
            variant="outlined"
            fullWidth
            value={matricula}
            onChange={(e) => {
              setMatricula(e.target.value);
            }}
            margin="dense"
          />
          <TextField
            data-testid="email"
            label="E-mail escolar"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            margin="dense"
          />
          <FormControl component="fieldset" fullWidth>
            <Box textAlign="left" mt="4px">
              <FormLabel component="legend">Sexo:</FormLabel>
            </Box>
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={sexo}
              onChange={handleChange}
            >
              <Box>
                <FormControlLabel
                  value="feminino"
                  control={<Radio />}
                  label="Feminino"
                />
                <FormControlLabel
                  value="masculino"
                  control={<Radio />}
                  label="Masculino"
                />
              </Box>
            </RadioGroup>
          </FormControl>
          <TextField
            data-testid="senha"
            type={passIsVisible ? 'text' : 'password'}
            label="Digite sua senha"
            variant="outlined"
            fullWidth
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
            }}
            margin="dense"
            InputProps={{
              endAdornment: (
                <IconButton
                  data-testid="toggleSenhaBtn"
                  onClick={() => setPassIsVisible(!passIsVisible)}
                >
                  {passIsVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }}
          />
          <TextField
            data-testid="confSenha"
            type={passIsVisible ? 'text' : 'password'}
            label="Confirme sua senha"
            variant="outlined"
            fullWidth
            value={senhaConf}
            onChange={(e) => {
              setSenhaConf(e.target.value);
            }}
            margin="dense"
            InputProps={{
              endAdornment: (
                <IconButton
                  data-testid="toggleConfSenhaBtn"
                  onClick={() => setPassConfIsVisible(!passConfIsVisible)}
                >
                  {passConfIsVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }}
          />
          <LabelError>{error}</LabelError>
          <Box textAlign="end" width="100%" mt="4px">
            <CustomButton1
              data-testid="cadastrar"
              variant="contained"
              onClick={handleSignup}
            >
              Criar conta
            </CustomButton1>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="end">
          <CustomText>Já tem uma conta?</CustomText>
          <CustomButton2
            data-testid="btnEntrar"
            variant="contained"
            onClick={() => {
              navigate('/');
            }}
          >
            Entrar
          </CustomButton2>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Signup;

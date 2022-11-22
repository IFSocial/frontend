import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';

import { useAuth } from '../../../hooks/useAuth';
import * as C from './styles';

const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConf, setSenhaConf] = useState('');
  const [sexo, setSexo] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = async () => {
    if (!email.match(emailRegex)) {
      setError('O email precisa ser um email');
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

      alert('Usuário cadatrado com sucesso!');

      navigate('/');
    } catch (err) {
      alert('Algo deu errado');
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
              navigate('/');
            }}
          >
            Entrar
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
          <C.Subtitle>Cadastro</C.Subtitle>
          <TextField
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
            label="E-mail escolar"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            margin="dense"
          />
          <TextField
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
            type="password"
            label="Digite sua senha"
            variant="outlined"
            fullWidth
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
            }}
            margin="dense"
          />
          <TextField
            type="password"
            label="Confirme sua senha"
            variant="outlined"
            fullWidth
            value={senhaConf}
            onChange={(e) => {
              setSenhaConf(e.target.value);
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
          <C.labelError>{error}</C.labelError>
          <Box textAlign="end" width="100%" mt="4px">
            <Button variant="contained" onClick={handleSignup}>
              Cadastrar
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Signup;

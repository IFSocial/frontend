import React from 'react';
import { useNavigate } from 'react-router-dom';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Box, Button, Grid, Link } from '@mui/material';

import { useAuth } from '../../../hooks/useAuth';
import * as C from './styles';

function Home() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Grid container>
      <Grid
        container
        item
        xs={12}
        justifyContent="space-between"
        alignItems="center"
        bgcolor="#d3d3d3"
        border="1px solid #000"
        borderRadius="12px"
        flexWrap="wrap"
        px="12px"
      >
        <AccountCircleIcon style={{ fontSize: 100 }} />

        <Box display="flex" justifyContent="space-between" width="50%">
          <Link
            itemID="home"
            href="/home"
            fontSize="24px"
            underline="none"
            color="#000"
          >
            Home
          </Link>
          <Link
            itemID="horarios"
            href="/home"
            fontSize="24px"
            underline="none"
            color="#000"
          >
            Horários
          </Link>
          <Link
            itemID="contatos"
            href="/home"
            fontSize="24px"
            underline="none"
            color="#000"
          >
            Contatos
          </Link>
        </Box>
        <Box>
          <Button
            itemID="sair"
            variant="contained"
            onClick={() => {
              logout();
              navigate('/');
            }}
          >
            Sair
          </Button>
        </Box>
      </Grid>
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
          sm={12}
          md={8}
          p="32px"
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          bgcolor="#d3d3d3"
          height="75vh"
          width="75vh"
          border="1px solid #000"
          borderRadius="12px"
        >
          <Box>
            <C.Title>BEM-VINDO A SEMADEC</C.Title>
            <C.Subtitle>DATA_DO_EVENTO</C.Subtitle>
          </Box>
          <Box
            bgcolor="white"
            width="80%"
            height="30%"
            border="1px solid #000"
            borderRadius="12px"
          >
            <C.Subtitle>
              INFORMAÇÕES SOBRE O EVENTO: <br />
              “A SEMADEC É A SEMANA ....”
            </C.Subtitle>
          </Box>
          <Box width="100%" textAlign="right">
            <Button itemID="ver-modalidades" variant="contained" size="large">
              Ver Modalidades
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;

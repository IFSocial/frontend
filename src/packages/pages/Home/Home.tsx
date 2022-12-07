import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Grid } from '@mui/material';

import { Footer, Header } from '../../../components';
import { useAuth } from '../../../hooks/useAuth';
import {
  Title,
  Subtitle,
  Conteudo,
  CustomGrid,
  CustomButton1,
  CustomButton2,
} from './styles';

function Home() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Grid container>
      <title>Semadec - Home</title>
      <Header
        onClick={() => {
          logout();
          navigate('/');
        }}
      />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        my="20px"
      >
        <Box>
          <Title>BEM-VINDO À SEMADEC</Title>
          <Subtitle>DATA_DO_EVENTO</Subtitle>
        </Box>
        <CustomGrid
          container
          item
          xs={12}
          sm={12}
          md={8}
          p="32px"
          direction="column"
          justifyContent="center"
          alignItems="center"
          height="50vh"
          width="50vh"
          border="1px solid #000"
          borderRadius="12px"
        >
          <Box
            bgcolor="white"
            width="80%"
            border="1px solid #000"
            borderRadius="12px"
          >
            <Conteudo>
              INFORMAÇÕES SOBRE O EVENTO: <br />
              “A SEMADEC É A SEMANA ....”
            </Conteudo>
          </Box>
          <Box display="flex" width="100%" justifyContent="center" my="12px">
            <Box width="45%" textAlign="left">
              <CustomButton2
                data-testid="edital"
                variant="contained"
                size="large"
              >
                Edital
              </CustomButton2>
            </Box>
            <Box width="45%" textAlign="right">
              <CustomButton1
                data-testid="ver-modalidades"
                variant="contained"
                size="large"
              >
                Ver Modalidades
              </CustomButton1>
            </Box>
          </Box>
        </CustomGrid>
      </Grid>
      <Footer
        onClick={() => {
          logout();
          navigate('/');
        }}
      />
    </Grid>
  );
}

export default Home;

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Grid } from '@mui/material';

import { Footer, Header } from '../../../components';
import { useAuth, useHome } from '../../../hooks';
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
  const { content, date } = useHome();
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
        <Box width="100%">
          <Title>BEM-VINDO À SEMADEC</Title>
          <Subtitle>{date}</Subtitle>
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
          minHeight="40vh"
          width="50vh"
          border="1px solid #000"
          borderRadius="12px"
        >
          <Box p="24px" minHeight="30vh">
            <Conteudo>{content}</Conteudo>
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
                onClick={() => {
                  navigate('/modalidades');
                }}
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

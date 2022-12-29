import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Grid } from '@mui/material';

import { Footer, Header } from '../../../components';
import { useAuth } from '../../../hooks';
import { Title, CustomGrid, Conteudo } from './styles';

function Contatos() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <Grid container>
      <title>Semadec - Contatos</title>
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
          <Title>Contatos</Title>
        </Box>
        <CustomGrid
          container
          item
          xs={12}
          sm={12}
          md={8}
          p="20px"
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="50vh"
          minHeight="55vh"
          border="1px solid #000"
          borderRadius="12px"
        >
          <Box
            width="100%"
            p="16px"
            display="flex"
            flexDirection="column"
            flexWrap="wrap"
            gap={1}
            alignItems="center"
          >
            <Box
              width="75%"
              display="flex"
              flexDirection="column"
              textAlign="left"
            >
              <Conteudo>Instagram:</Conteudo>
              <Conteudo>Email:</Conteudo>
              <Conteudo>Telefone institucional:</Conteudo>
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

export default Contatos;

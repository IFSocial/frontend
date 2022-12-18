import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Grid } from '@mui/material';

import { Footer, Header } from '../../../components';
import { useAuth, useModalidadesPage } from '../../../hooks';
import { Card } from '../../ui-kit';
import { Title, CustomGrid } from './styles';

function Modalidades() {
  const { logout } = useAuth();
  const { todasModalidades, todosEsportes } = useModalidadesPage();
  const navigate = useNavigate();

  const [esportes, setEsportes] = useState<string | undefined>(undefined);

  return (
    <Grid container>
      <title>Semadec - Modalidades</title>
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
          <Title>Modalidades</Title>
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
          width="50vh"
          minHeight="55vh"
          border="1px solid #000"
          borderRadius="12px"
        >
          <Box
            p="24px"
            display="flex"
            flexWrap="wrap"
            gap={3}
            justifyContent="center"
          >
            {esportes
              ? todosEsportes?.map((modalidade) => {
                  return (
                    <Card
                      key={modalidade.id}
                      subtitle={modalidade.titulo}
                      image={modalidade.imagem}
                      onClick={() => {
                        navigate('/');
                      }}
                    />
                  );
                })
              : todasModalidades?.map((modalidade) => {
                  return (
                    <Card
                      key={modalidade.id}
                      subtitle={modalidade.titulo}
                      image={modalidade.imagem}
                      onClick={() => {
                        setEsportes(modalidade.titulo);
                      }}
                    />
                  );
                })}
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

export default Modalidades;

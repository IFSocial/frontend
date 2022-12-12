import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Grid } from '@mui/material';

import { Footer, Header } from '../../../components';
import { useAuth } from '../../../hooks';
import { Card } from '../../ui-kit';
import { Title, CustomGrid } from './styles';

function Modalidades() {
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
          height="50vh"
          width="50vh"
          border="1px solid #000"
          borderRadius="12px"
        >
          <Box p="24px">
            <Card
              subtitle="Esportes Coletivos"
              image="https://quizizz.com/media/resource/gs/quizizz-media/quizzes/e4f18483-db85-4a3d-a350-a0c581c4ace4"
              onClick={() => {
                navigate('/esportes');
              }}
            />
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

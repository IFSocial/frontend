import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Grid } from '@mui/material';

import { Footer, Header } from '../../../components';
import { useAuth } from '../../../hooks';
import {
  Title,
  CustomGrid,
  Conteudo,
  Subtitle,
  CustomButton1,
  Table,
  Row,
  TituloConteudo,
} from './styles';

function Perfil() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [content, setContent] = useState<'Dados' | 'Modalidades'>('Dados');
  return (
    <Grid container>
      <title>Semadec - Meu Perfil</title>
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
          <Title>Meu Perfil</Title>
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
            <Subtitle>
              {content === 'Dados'
                ? 'Meus dados pessoais'
                : 'Minhas Modalidades'}
            </Subtitle>
            {content === 'Dados' ? (
              <>
                <Box
                  width="75%"
                  display="flex"
                  flexDirection="column"
                  textAlign="left"
                >
                  <Conteudo>Nome:</Conteudo>
                  <Conteudo>Matrícula:</Conteudo>
                  <Conteudo>Email escolar:</Conteudo>
                  <Conteudo>Sexo:</Conteudo>
                </Box>
                <Box display="flex" width="100%" justifyContent="center">
                  <Box width="90%" textAlign="right">
                    <CustomButton1
                      data-testid="minhas-modalidades"
                      variant="contained"
                      size="large"
                      onClick={() => {
                        setContent('Modalidades');
                      }}
                    >
                      Minhas Modalidades
                    </CustomButton1>
                  </Box>
                </Box>
              </>
            ) : (
              <>
                <Table>
                  <Row>
                    <TituloConteudo>Esporte</TituloConteudo>
                    <TituloConteudo>Modalidade</TituloConteudo>
                  </Row>
                  <Row>
                    <Conteudo>Futsal</Conteudo>
                    <Conteudo>Coletivo</Conteudo>
                  </Row>
                </Table>
                <Box display="flex" width="100%" justifyContent="center">
                  <Box width="90%" textAlign="right">
                    <CustomButton1
                      data-testid="meus-dados"
                      variant="contained"
                      size="large"
                      onClick={() => {
                        setContent('Dados');
                      }}
                    >
                      Meus Dados
                    </CustomButton1>
                  </Box>
                </Box>
              </>
            )}
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

export default Perfil;

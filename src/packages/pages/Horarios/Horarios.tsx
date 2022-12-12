import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Grid } from '@mui/material';

import { Footer, Header } from '../../../components';
import { useAuth } from '../../../hooks';
import {
  Title,
  Cell,
  CustomGrid,
  Conteudo,
  Table,
  Row,
  TituloConteudo,
} from './styles';

function Horarios() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <Grid container>
      <title>Semadec - Horários</title>
      <Box width="100%" minWidth="650px">
        <Header
          onClick={() => {
            logout();
            navigate('/');
          }}
        />
      </Box>
      <Grid
        container
        minWidth="650px"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        my="20px"
      >
        <Box width="100%">
          <Title>Horários</Title>
        </Box>
        <CustomGrid
          container
          item
          xs={12}
          sm={12}
          md={9}
          p="8px"
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
            minWidth="625px"
            display="flex"
            flexDirection="column"
            flexWrap="wrap"
            gap={1}
            alignItems="center"
          >
            <Table>
              <Row>
                <Cell>
                  <TituloConteudo>Jogo</TituloConteudo>
                </Cell>
                <Cell>
                  <TituloConteudo>Partida</TituloConteudo>
                </Cell>
                <Cell>
                  <TituloConteudo>Data</TituloConteudo>
                </Cell>
                <Cell>
                  <TituloConteudo>Horario</TituloConteudo>
                </Cell>
                <Cell>
                  <TituloConteudo>Rodada</TituloConteudo>
                </Cell>
              </Row>
              <Row>
                <Cell>
                  <Conteudo>12</Conteudo>
                </Cell>
                <Cell>
                  <Conteudo>Turmaxablaus</Conteudo>
                  <Conteudo>x</Conteudo>
                  <Conteudo>Turmaxablaus</Conteudo>
                </Cell>
                <Cell>
                  <Conteudo>12/12/2012</Conteudo>
                </Cell>
                <Cell>
                  <Conteudo>12:12</Conteudo>
                </Cell>
                <Cell>
                  <Conteudo>12</Conteudo>
                </Cell>
              </Row>
            </Table>
          </Box>
        </CustomGrid>
      </Grid>
      <Box width="100%" minWidth="650px">
        <Footer
          onClick={() => {
            logout();
            navigate('/');
          }}
        />
      </Box>
    </Grid>
  );
}

export default Horarios;

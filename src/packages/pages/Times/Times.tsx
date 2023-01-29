/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, Grid, IconButton, TextField } from '@mui/material';

import { Footer, Header } from '../../../components';
import { useAuth, useModalidadesPage } from '../../../hooks';
import { Esportes } from '../../../hooks/useModalidades';
import {
  Title,
  Subtitle,
  Conteudo,
  CustomGrid,
  CustomButton1,
  CustomButton2,
} from './styles';

function Times() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { getEsporteById } = useModalidadesPage();
  const [esporte, setEsporte] = useState<Esportes>();

  const { id } = useParams();

  const loadEsporte = useCallback(async () => {
    const getEsporte = await getEsporteById(id);
    setEsporte(getEsporte);
  }, []);

  useEffect(() => {
    loadEsporte();
  }, []);

  const [nomeTime, setNomeTime] = useState('');
  const [categoria, setCategoria] = useState('');
  const [nomeTurma, setNomeTurma] = useState('');

  const [jogador, setJogador] = useState('');
  const [matricula, setMatricula] = useState('');

  const [jogadoresDoTime, setJogadoresDoTime] = useState<string[]>([]);
  const [matriculasDoTime, setMatriculasDoTime] = useState<string[]>([]);

  const isIndividual = false;

  return (
    <Grid container>
      <title>Semadec - Times</title>
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
          <Title>Inscrição - {esporte?.nomeEsporte}</Title>
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
          <Box
            display="flex"
            width="100%"
            justifyContent={isIndividual ? 'center' : undefined}
          >
            <Box
              width={isIndividual ? '50%' : '30%'}
              display="flex"
              flexDirection="column"
              gap={3}
            >
              {!isIndividual && (
                <TextField
                  data-testid="time"
                  label="Nome do Time"
                  variant="outlined"
                  fullWidth
                  value={nomeTime}
                  onChange={(e) => {
                    setNomeTime(e.target.value);
                  }}
                  margin="dense"
                />
              )}
              <TextField
                data-testid="turma"
                label="Turma"
                variant="outlined"
                fullWidth
                value={nomeTurma}
                onChange={(e) => {
                  setNomeTurma(e.target.value);
                }}
                margin="dense"
              />
              <TextField
                data-testid="categoria"
                label="Categoria"
                variant="outlined"
                fullWidth
                value={categoria}
                onChange={(e) => {
                  setCategoria(e.target.value);
                }}
                margin="dense"
              />
            </Box>
            {!isIndividual && (
              <Box
                width="70%"
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
              >
                <Subtitle>Time</Subtitle>
                <Box
                  display="flex"
                  justifyContent="space-around"
                  flexDirection="column"
                  width="90%"
                  minHeight="200px"
                >
                  <Box
                    display="flex"
                    justifyContent="space-around"
                    width="100%"
                  >
                    <Box width="50%" display="flex" justifyContent="center">
                      <Conteudo>Nome</Conteudo>
                    </Box>
                    <Box width="50%" display="flex" justifyContent="center">
                      <Conteudo>Matricula</Conteudo>
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                    flexDirection="row"
                  >
                    <Box
                      width="50%"
                      display="flex"
                      justifyContent="center"
                      flexDirection="column"
                    >
                      {jogadoresDoTime.map((nome) => (
                        <Conteudo>{nome}</Conteudo>
                      ))}
                    </Box>
                    <Box
                      width="50%"
                      display="flex"
                      justifyContent="center"
                      flexDirection="column"
                    >
                      {matriculasDoTime.map((numero, index) => {
                        return (
                          <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="center"
                          >
                            <Conteudo>{numero}</Conteudo>
                            <IconButton
                              onClick={() => {
                                jogadoresDoTime.splice(index, 1);
                                matriculasDoTime.splice(index, 1);
                                setJogadoresDoTime([...jogadoresDoTime]);
                                setMatriculasDoTime([...matriculasDoTime]);
                              }}
                            >
                              <HighlightOffIcon />
                            </IconButton>
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
          <Box width="100%" display="flex" justifyContent="left">
            <Subtitle>
              {isIndividual ? 'Informe seus dados' : 'Adicionar atleta'}
            </Subtitle>
          </Box>
          <Box
            display="flex"
            width="100%"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Box width="40%" textAlign="left">
              <TextField
                data-testid="categoria"
                label="Nome"
                variant="outlined"
                fullWidth
                value={jogador}
                onChange={(e) => {
                  setJogador(e.target.value);
                }}
                margin="dense"
              />
            </Box>
            <Box width="40%" textAlign="right">
              <TextField
                data-testid="categoria"
                label="Matricula"
                variant="outlined"
                fullWidth
                value={matricula}
                onChange={(e) => {
                  setMatricula(e.target.value);
                }}
                margin="dense"
              />
            </Box>
            {!isIndividual && (
              <Box width="20%">
                <CustomButton2
                  data-testid="ver-modalidades"
                  variant="contained"
                  size="large"
                  disabled={
                    jogadoresDoTime.length >= 14 ||
                    matriculasDoTime.length >= 14
                  }
                  onClick={() => {
                    setJogadoresDoTime([...jogadoresDoTime, jogador]);
                    setMatriculasDoTime([...matriculasDoTime, matricula]);
                  }}
                >
                  Adicionar
                </CustomButton2>
              </Box>
            )}
          </Box>
          <Box
            display="flex"
            width="100%"
            justifyContent="end"
            alignItems="center"
            mt="16px"
          >
            <CustomButton1
              data-testid="ver-modalidades"
              variant="contained"
              size="large"
              disabled={
                (!isIndividual &&
                  (jogadoresDoTime.length === 0 ||
                    matriculasDoTime.length === 0)) ||
                (isIndividual && (!matricula || !jogador))
              }
              onClick={() => {
                console.log('inscreve');
              }}
            >
              Inscrever-se
            </CustomButton1>
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

export default Times;

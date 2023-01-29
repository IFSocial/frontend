/* eslint-disable no-underscore-dangle */
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Search } from '@material-ui/icons';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {
  Box,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from '@mui/material';

import { Footer, Header } from '../../../components';
import { useAuth, useHorarios } from '../../../hooks';
import {
  Title,
  Cell,
  CustomGrid,
  Conteudo,
  Table,
  Row,
  TituloConteudo,
  CustomButton1,
} from './styles';

function Horarios() {
  const { logout } = useAuth();
  const { createHorario, todosHorarios, deleteHorario } = useHorarios();

  const navigate = useNavigate();
  const [pesquisa, setPesquisa] = useState<string>('');

  const [jogo, setJogo] = useState<string>('');
  const [partida, setPartida] = useState<string>('');
  const [data, setData] = useState<string>('');
  const [horario, setHorario] = useState<string>('');
  const [rodada, setRodada] = useState<string>('');
  const [idPartida, setIdPartida] = useState<string>();

  const [open, setOpen] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const auth = useAuth();
  const isAdmin = auth.role === 'admin';

  const horariosFiltrados = useMemo(() => {
    const lowerFilter = pesquisa?.toLowerCase();
    return pesquisa
      ? todosHorarios?.filter(
          (hora) =>
            hora.partidaVS.toLowerCase().includes(lowerFilter ?? '') ||
            hora.horarios.toLowerCase().includes(lowerFilter ?? '') ||
            hora.data.toLowerCase().includes(lowerFilter ?? ''),
        )
      : todosHorarios;
  }, [pesquisa, todosHorarios]);

  return (
    <>
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
            gap={10}
          >
            <Box width="100%" display="flex" alignItems="center">
              <Box
                width="50%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                mx="24px"
              >
                <TextField
                  data-testid="pesquisarHorarios"
                  placeholder="Pesquisar por data, time ou horário"
                  fullWidth
                  onChange={(e) => {
                    setPesquisa(e.target.value);
                  }}
                />
                <IconButton>
                  <Search />
                </IconButton>
              </Box>

              {isAdmin ? (
                <Box width="45%" textAlign="right">
                  <CustomButton1
                    data-testid="ver-modalidades"
                    variant="contained"
                    size="large"
                    onClick={() => setOpen(true)}
                  >
                    Cadastrar Novo Horário
                  </CustomButton1>
                </Box>
              ) : null}
              <Box width="15%" textAlign="center">
                <CustomButton1
                  data-testid="ver-modalidades"
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/equipes')}
                >
                  Ver Times
                </CustomButton1>
              </Box>
            </Box>
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
                  {isAdmin && (
                    <Cell>
                      <TituloConteudo>Deletar Time</TituloConteudo>
                    </Cell>
                  )}
                </Row>
                {horariosFiltrados?.map((hora) => {
                  return (
                    <Row>
                      <Cell>
                        <Conteudo>{hora.jogos}</Conteudo>
                      </Cell>
                      <Cell>
                        <Conteudo>{hora.partidaVS}</Conteudo>
                      </Cell>
                      <Cell>
                        <Conteudo>{hora.data}</Conteudo>
                      </Cell>
                      <Cell>
                        <Conteudo>{hora.horarios}</Conteudo>
                      </Cell>
                      <Cell>
                        <Conteudo>{hora.rodada}</Conteudo>
                      </Cell>
                      {isAdmin && (
                        <Cell>
                          <IconButton
                            onClick={() => {
                              setIdPartida(hora._id);
                              setOpenDelete(true);
                            }}
                          >
                            <DeleteForeverIcon />
                          </IconButton>
                        </Cell>
                      )}
                    </Row>
                  );
                })}
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

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Cadastrar Novo Horário
          </Typography>
          <Box display="flex" flexDirection="column" gap={3} my="12px">
            <Box>
              <TextField
                data-testid="inputJogo"
                placeholder="Jogo"
                label="Jogo (número)"
                fullWidth
                value={jogo}
                onChange={(e) => {
                  setJogo(e.target.value);
                }}
              />
            </Box>
            <TextField
              data-testid="inputPartida"
              placeholder="Partida"
              label="Partida"
              fullWidth
              value={partida}
              onChange={(e) => {
                setPartida(e.target.value);
              }}
            />
            <TextField
              data-testid="inputData"
              placeholder="Data"
              label="Data"
              fullWidth
              value={data}
              onChange={(e) => {
                setData(e.target.value);
              }}
            />
            <TextField
              data-testid="inputHorário"
              placeholder="Horário"
              label="Horário"
              fullWidth
              value={horario}
              onChange={(e) => {
                setHorario(e.target.value);
              }}
            />
            <TextField
              data-testid="inputRodada"
              placeholder="Rodada"
              label="Rodada"
              fullWidth
              value={rodada}
              onChange={(e) => {
                setRodada(e.target.value);
              }}
            />
            <CustomButton1
              data-testid="ver-modalidades"
              variant="contained"
              size="large"
              onClick={() => {
                createHorario({
                  jogos: jogo,
                  partidaVS: partida,
                  data,
                  horarios: horario,
                  rodada,
                  times: '?',
                });
                setOpen(false);
              }}
            >
              Cadastrar
            </CustomButton1>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display="flex" textAlign="center">
            <Typography variant="h6" component="h2">
              Tem certeza que quer deletar essa partida? Está ação não poderá
              ser desfeita.
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap={3} my="12px">
            <CustomButton1
              data-testid="ver-modalidades"
              variant="contained"
              size="large"
              onClick={() => {
                deleteHorario(idPartida);
                setOpenDelete(false);
              }}
            >
              Deletar
            </CustomButton1>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default Horarios;

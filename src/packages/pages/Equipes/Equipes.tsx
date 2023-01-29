/* eslint-disable no-underscore-dangle */
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowBack, Search } from '@material-ui/icons';
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
import { useAuth, useTimes } from '../../../hooks';
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

function Equipes() {
  const { logout } = useAuth();
  const { todosTimes, deleteTime } = useTimes();
  const navigate = useNavigate();
  const [pesquisa, setPesquisa] = useState<string>('');
  const [idTime, setIdTime] = useState<string>();

  const [open, setOpen] = useState<boolean>(false);

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

  const timesFiltrados = useMemo(() => {
    const lowerFilter = pesquisa?.toLowerCase();
    return pesquisa
      ? todosTimes?.filter(
          (time) =>
            time.nomeTime.toLowerCase().includes(lowerFilter ?? '') ||
            time.categoria.toLowerCase().includes(lowerFilter ?? '') ||
            time.esporte?.toLowerCase().includes(lowerFilter ?? ''),
        )
      : todosTimes;
  }, [pesquisa, todosTimes]);

  return (
    <>
      <Grid container>
        <title>Semadec - Equipes</title>
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
            <Title>Times</Title>
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
            gap={2}
          >
            <Box display="flex" width="100%" alignItems="center">
              <IconButton onClick={() => navigate('/horarios')}>
                <ArrowBack style={{ color: '#000', fontSize: '44px' }} />
                <Typography variant="h6" component="h2">
                  Voltar
                </Typography>
              </IconButton>
            </Box>
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
                  placeholder="Pesquisar por Nome, Categoria ou Esporte"
                  fullWidth
                  onChange={(e) => {
                    setPesquisa(e.target.value);
                  }}
                />
                <IconButton>
                  <Search />
                </IconButton>
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
                    <TituloConteudo>Nome</TituloConteudo>
                  </Cell>
                  <Cell>
                    <TituloConteudo>Categoria</TituloConteudo>
                  </Cell>
                  <Cell>
                    <TituloConteudo>Esporte</TituloConteudo>
                  </Cell>
                  {isAdmin && (
                    <Cell>
                      <TituloConteudo>Deletar Time</TituloConteudo>
                    </Cell>
                  )}
                </Row>
                {timesFiltrados?.map((time) => {
                  return (
                    <Row>
                      <Cell>
                        <Conteudo>{time.nomeTime}</Conteudo>
                      </Cell>
                      <Cell>
                        <Conteudo>{time.categoria}</Conteudo>
                      </Cell>
                      <Cell>
                        <Conteudo>{time.esporte}</Conteudo>
                      </Cell>
                      {isAdmin && (
                        <Cell>
                          <IconButton
                            onClick={() => {
                              setIdTime(time._id);
                              setOpen(true);
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
          <Box display="flex" textAlign="center">
            <Typography variant="h6" component="h2">
              Tem certeza que quer deletar essa equipe? Está ação não poderá ser
              desfeita.
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap={3} my="12px">
            <CustomButton1
              data-testid="ver-modalidades"
              variant="contained"
              size="large"
              onClick={() => {
                deleteTime(idTime);
                setOpen(false);
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

export default Equipes;

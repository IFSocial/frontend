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
import { useAuth, useModalidadesPage } from '../../../hooks';
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

function DeleteInfo() {
  const { logout } = useAuth();
  const { todasModalidades, deleteModalidade, todosEsportes, deleteEsporte } =
    useModalidadesPage();

  const navigate = useNavigate();
  const [pesquisaModalidade, setPesquisaModalidade] = useState<string>('');
  const [pesquisaEsporte, setPesquisaEsporte] = useState<string>('');
  const [isModalidadeOuEsporte, setIsModalidadeOuEsporte] = useState<
    'modalidade' | 'esporte'
  >();

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

  const modalidadesFiltradas = useMemo(() => {
    const lowerFilter = pesquisaModalidade?.toLowerCase();
    return pesquisaModalidade
      ? todasModalidades?.filter((modalidade) =>
          modalidade.modalidade.toLowerCase().includes(lowerFilter ?? ''),
        )
      : todasModalidades;
  }, [pesquisaModalidade, todasModalidades]);

  const esportesFiltrados = useMemo(() => {
    const lowerFilter = pesquisaEsporte?.toLowerCase();
    return pesquisaEsporte
      ? todosEsportes?.filter((esporte) =>
          esporte.nomeEsporte.toLowerCase().includes(lowerFilter ?? ''),
        )
      : todosEsportes;
  }, [pesquisaEsporte, todosEsportes]);

  return (
    <>
      <Grid container>
        <title>Semadec - Deletar</title>
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
            <Title>Deletar Modalidade ou Esporte</Title>
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
              <IconButton onClick={() => navigate('/modalidades')}>
                <ArrowBack style={{ color: '#000', fontSize: '44px' }} />
                <Typography variant="h6" component="h2">
                  Voltar
                </Typography>
              </IconButton>
            </Box>
            <Box
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                width="50%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                mx="24px"
              >
                <TextField
                  data-testid="pesquisarHorarios"
                  placeholder="Pesquisar por Modalidade"
                  fullWidth
                  onChange={(e) => {
                    setPesquisaModalidade(e.target.value);
                  }}
                />
                <IconButton>
                  <Search />
                </IconButton>
              </Box>
              <Box
                width="50%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                mx="24px"
              >
                <TextField
                  data-testid="pesquisarHorarios"
                  placeholder="Pesquisar por Esporte"
                  fullWidth
                  onChange={(e) => {
                    setPesquisaEsporte(e.target.value);
                  }}
                />
                <IconButton>
                  <Search />
                </IconButton>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row" gap={3} width="100%">
              <Box
                width="50%"
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
                    {isAdmin && (
                      <Cell>
                        <TituloConteudo>Deletar Modalidade</TituloConteudo>
                      </Cell>
                    )}
                  </Row>
                  {modalidadesFiltradas?.map((modalidade) => {
                    return (
                      <Row>
                        <Cell>
                          <Conteudo>{modalidade.modalidade}</Conteudo>
                        </Cell>
                        {isAdmin && (
                          <Cell>
                            <IconButton
                              onClick={() => {
                                setIdTime(modalidade._id);
                                setIsModalidadeOuEsporte('modalidade');
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
              <Box
                width="50%"
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
                    {isAdmin && (
                      <Cell>
                        <TituloConteudo>Deletar Esporte</TituloConteudo>
                      </Cell>
                    )}
                  </Row>
                  {esportesFiltrados?.map((esporte) => {
                    return (
                      <Row>
                        <Cell>
                          <Conteudo>{esporte.nomeEsporte}</Conteudo>
                        </Cell>
                        {isAdmin && (
                          <Cell>
                            <IconButton
                              onClick={() => {
                                setIdTime(esporte._id);
                                setIsModalidadeOuEsporte('esporte');
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
              Tem certeza que quer deletar? Está ação não poderá ser desfeita.
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap={3} my="12px">
            <CustomButton1
              data-testid="ver-modalidades"
              variant="contained"
              size="large"
              onClick={() => {
                if (isModalidadeOuEsporte === 'modalidade') {
                  deleteModalidade(idTime);
                }
                if (isModalidadeOuEsporte === 'esporte') {
                  deleteEsporte(idTime);
                }
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

export default DeleteInfo;

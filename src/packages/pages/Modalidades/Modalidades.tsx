import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowBack } from '@material-ui/icons';
import {
  Box,
  Grid,
  IconButton,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from '@mui/material';

import { Footer, Header } from '../../../components';
import { useAuth, useModalidadesPage } from '../../../hooks';
import { Card } from '../../ui-kit';
import { Title, CustomGrid, CustomButton1 } from './styles';

function Modalidades() {
  const { logout } = useAuth();
  const { todasModalidades, todosEsportes, createModalidade, createEsporte } =
    useModalidadesPage();
  const navigate = useNavigate();

  const [esportes, setEsportes] = useState<string | undefined>(undefined);

  const [nomeModalidade, setNomeModalidade] = useState<string>('');
  const [imagemModalidade, setImagemModalidade] = useState<string>('');
  const [openModalidade, setOpenModalidade] = useState<boolean>(false);

  const [nomeEsporte, setNomeEsporte] = useState<string>('');
  const [imagemEsporte, setImagemEsporte] = useState<string>('');
  const [esporteModalidade, setEsporteModalidade] = useState<string>('');
  const [openEsporte, setOpenEsporte] = useState<boolean>(false);

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

  const isAdmin = true;

  return (
    <>
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
            <Title>{esportes ? 'Esportes' : 'Modalidades'}</Title>
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
            <Box display="flex" width="100%" alignItems="center">
              <IconButton
                onClick={() =>
                  esportes ? setEsportes(undefined) : navigate('/home')
                }
              >
                <ArrowBack style={{ color: '#000', fontSize: '44px' }} />
                <Typography variant="h6" component="h2">
                  Voltar
                </Typography>
              </IconButton>
            </Box>
            <Box
              p="24px"
              display="flex"
              flexWrap="wrap"
              gap={3}
              justifyContent="center"
            >
              {esportes
                ? todosEsportes
                    ?.filter((modalidade) =>
                      modalidade.modalidade
                        .toLowerCase()
                        .includes(esportes.toLowerCase()),
                    )
                    .map((modalidade) => {
                      return (
                        <Card
                          key={modalidade.nomeEsporte}
                          subtitle={modalidade.nomeEsporte}
                          image={modalidade.Imagem}
                          onClick={() => {
                            // eslint-disable-next-line no-console
                            console.log('Navega');
                          }}
                        />
                      );
                    })
                : todasModalidades?.map((modalidade) => {
                    return (
                      <Card
                        key={modalidade.id}
                        subtitle={modalidade.modalidade}
                        image={modalidade.imagem}
                        onClick={() => {
                          setEsportes(modalidade.modalidade);
                        }}
                      />
                    );
                  })}
            </Box>
            <Box display="flex" width="95%" justifyContent="right">
              {isAdmin && !esportes ? (
                <CustomButton1
                  data-testid="modalNovaModalidade"
                  variant="contained"
                  size="large"
                  onClick={() => {
                    setOpenModalidade(true);
                  }}
                >
                  Cadastrar Nova Modalidade
                </CustomButton1>
              ) : (
                <CustomButton1
                  data-testid="modalNovoEsporte"
                  variant="contained"
                  size="large"
                  onClick={() => {
                    setOpenEsporte(true);
                  }}
                >
                  Cadastrar Novo Esporte
                </CustomButton1>
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

      <Modal open={openModalidade} onClose={() => setOpenModalidade(false)}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Cadastrar Nova Modalidade
          </Typography>
          <Box display="flex" flexDirection="column" gap={3}>
            <Box my="12px">
              <TextField
                data-testid="inputNome"
                placeholder="Nome"
                label="Nome"
                fullWidth
                value={nomeModalidade}
                onChange={(e) => {
                  setNomeModalidade(e.target.value);
                }}
              />
            </Box>
            <TextField
              data-testid="inputImagem"
              placeholder="Url da Imagem"
              label="Url da Imagem"
              fullWidth
              value={imagemModalidade}
              onChange={(e) => {
                setImagemModalidade(e.target.value);
              }}
            />
            <CustomButton1
              data-testid="ver-modalidades"
              variant="contained"
              size="large"
              onClick={() => {
                createModalidade(imagemModalidade, nomeModalidade);
                setImagemModalidade('');
                setNomeModalidade('');
                setOpenModalidade(false);
              }}
            >
              Cadastrar
            </CustomButton1>
          </Box>
        </Box>
      </Modal>

      <Modal open={openEsporte} onClose={() => setOpenEsporte(false)}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Cadastrar Novo Esporte
          </Typography>
          <Box display="flex" flexDirection="column" gap={3} my="12px">
            <TextField
              data-testid="inputNome"
              placeholder="Nome"
              label="Nome"
              fullWidth
              value={nomeEsporte}
              onChange={(e) => {
                setNomeEsporte(e.target.value);
              }}
            />

            <TextField
              data-testid="inputImagem"
              placeholder="Url da Imagem"
              label="Url da Imagem"
              fullWidth
              value={imagemEsporte}
              onChange={(e) => {
                setImagemEsporte(e.target.value);
              }}
            />

            <Select
              data-testid="selectModalidade"
              value={esporteModalidade}
              label="Modalidade"
              onChange={(e) => setEsporteModalidade(e.target.value)}
            >
              {todasModalidades?.map((modalidade) => {
                return (
                  <MenuItem key={modalidade.id} value={modalidade.modalidade}>
                    {modalidade.modalidade}
                  </MenuItem>
                );
              })}
            </Select>

            <CustomButton1
              data-testid="ver-modalidades"
              variant="contained"
              size="large"
              onClick={() => {
                createEsporte(nomeEsporte, imagemEsporte, esporteModalidade);
                setNomeEsporte('');
                setImagemEsporte('');
                setEsporteModalidade('');
                setOpenEsporte(false);
              }}
            >
              Cadastrar
            </CustomButton1>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default Modalidades;

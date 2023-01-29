import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Grid, TextField } from '@mui/material';

import { Footer, Header } from '../../../components';
import { useAuth, useHome } from '../../../hooks';
import {
  Title,
  Subtitle,
  Conteudo,
  CustomGrid,
  CustomButton1,
  CustomButton2,
} from './styles';

function Home() {
  const auth = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { content, date, editData, editNoticias } = useHome();

  const [isEditingDate, setIsEditingDate] = useState<boolean>(false);
  const [data, setData] = useState('');

  const [isEditingContent, setIsEditingContent] = useState<boolean>(false);
  const [newContent, setNewContent] = useState('');
  const isAdmin = auth.role === 'admin';

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
          <Title>BEM-VINDO À SEMADEC</Title>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={isEditingDate ? 0 : 5}
            flexDirection={isEditingDate ? 'column' : 'row'}
          >
            {isEditingDate ? (
              <Box my="12px">
                <TextField
                  data-testid="inputData"
                  label="Data do Evento"
                  variant="outlined"
                  value={data}
                  onChange={(e) => {
                    setData(e.target.value);
                  }}
                />
              </Box>
            ) : (
              <Subtitle>
                Data do Evento: {}
                {date?.map((dataSemadec) => {
                  return dataSemadec.dataEvento;
                })}
              </Subtitle>
            )}
            {isAdmin && (
              <Box>
                {isEditingDate ? (
                  <Box
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                    width="100%"
                    gap={3}
                    my="8px"
                  >
                    <Button
                      onClick={() => setIsEditingDate(false)}
                      variant="outlined"
                    >
                      Cancelar
                    </Button>

                    <Button
                      onClick={() => {
                        editData(data);
                        setIsEditingDate(false);
                      }}
                      variant="contained"
                    >
                      Salvar
                    </Button>
                  </Box>
                ) : (
                  <Button
                    onClick={() => setIsEditingDate(true)}
                    variant="contained"
                  >
                    Editar
                  </Button>
                )}
              </Box>
            )}
          </Box>
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
          <Box p="24px" minHeight="30vh" width="95%">
            {isEditingContent ? (
              <Box my="12px" width="100%">
                <TextField
                  data-testid="inputConteudo"
                  label="Conteudo Principal"
                  variant="outlined"
                  value={newContent || content}
                  onChange={(e) => {
                    setNewContent(e.target.value);
                  }}
                  fullWidth
                  multiline
                />
              </Box>
            ) : (
              <Conteudo>{content}</Conteudo>
            )}
            {isAdmin && (
              <Box width="100%" display="flex" justifyContent="end">
                {isEditingContent ? (
                  <Box
                    display="flex"
                    justifyContent="right"
                    alignItems="center"
                    width="100%"
                    gap={3}
                  >
                    <Button
                      onClick={() => {
                        setIsEditingContent(false);
                        setNewContent('');
                      }}
                      variant="outlined"
                    >
                      Cancelar
                    </Button>
                    <Button
                      onClick={() => {
                        editNoticias(newContent);
                        setIsEditingContent(false);
                      }}
                      variant="contained"
                    >
                      Salvar
                    </Button>
                  </Box>
                ) : (
                  <Button
                    onClick={() => setIsEditingContent(true)}
                    variant="contained"
                  >
                    Editar Conteúdo
                  </Button>
                )}
              </Box>
            )}
          </Box>
          <Box display="flex" width="100%" justifyContent="center">
            <Box width="45%" textAlign="left">
              <CustomButton2
                data-testid="edital"
                variant="contained"
                size="large"
              >
                Edital
              </CustomButton2>
            </Box>
            <Box width="45%" textAlign="right">
              <CustomButton1
                data-testid="ver-modalidades"
                variant="contained"
                size="large"
                onClick={() => {
                  navigate('/modalidades');
                }}
              >
                Ver Modalidades
              </CustomButton1>
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

export default Home;

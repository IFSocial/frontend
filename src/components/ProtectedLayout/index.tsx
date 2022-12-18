import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

import { useAuth } from '../../hooks/useAuth';
import { Title, CustomGrid, CustomIcon, CustomButton1 } from './styles';

export function ProtectedLayout({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.email) {
    return (
      <CustomGrid
        container
        item
        xs={12}
        p="32px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        border="1px solid #000"
        flexDirection="row"
        gap={6}
      >
        <CustomIcon style={{ fontSize: 120 }} />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Title>Atenção! Faça login para continuar</Title>
          <Box textAlign="end" width="100%">
            <CustomButton1
              data-testid="btnLogin"
              variant="contained"
              onClick={() => navigate('/')}
            >
              Login
            </CustomButton1>
          </Box>
        </Box>
      </CustomGrid>
    );
  }
  return children;
}

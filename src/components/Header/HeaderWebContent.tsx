import React from 'react';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Box } from '@mui/material';

import { Link } from './styles';

function HeaderWebContent() {
  return (
    <>
      <Box display="flex" justifyContent="space-between" width="50%">
        <Link data-testid="home" href="/home" underline="none" color="#fff">
          Home
        </Link>
        <Link
          data-testid="horarios"
          href="/horarios"
          underline="none"
          color="#fff"
        >
          Horários
        </Link>
        <Link itemID="contatos" href="/contatos" underline="none" color="#fff">
          Contatos
        </Link>
      </Box>
      <Box>
        <Link data-testid="perfil" href="/perfil">
          <AccountCircleIcon style={{ fontSize: '5rem', color: '#fff' }} />
        </Link>
      </Box>
    </>
  );
}

export default HeaderWebContent;

import React from 'react';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Box, Grid } from '@mui/material';

import logo from '../../assets/logo.png';
import { CustomGrid, Link, Title } from './styles';

function Header() {
  return (
    <Grid container>
      <CustomGrid container item xs={12} minWidth="1000px">
        <Box display="flex" justifyContent="center" alignItems="center">
          <img src={logo} alt="logo" width="120px" height="125px" />
          <Title size={1}>SEMADEC</Title>
        </Box>

        <Box display="flex" justifyContent="space-between" width="50%">
          <Link itemID="home" href="/home" underline="none" color="#fff">
            Home
          </Link>
          <Link
            itemID="horarios"
            href="/horarios"
            underline="none"
            color="#fff"
          >
            Horários
          </Link>
          <Link
            itemID="contatos"
            href="/contatos"
            underline="none"
            color="#fff"
          >
            Contatos
          </Link>
        </Box>
        <Box>
          <Link itemID="perfil" href="/perfil">
            <AccountCircleIcon style={{ fontSize: '5rem', color: '#fff' }} />
          </Link>
        </Box>
      </CustomGrid>
    </Grid>
  );
}

export default Header;

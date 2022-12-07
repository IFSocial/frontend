import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Box, Grid } from '@mui/material';

import logo from '../../assets/logo.png';
import HeaderMobileContent from './HeaderMobileContent';
import HeaderWebContent from './HeaderWebContent';
import { CustomGrid, Title } from './styles';

function Header({ onClick }: { onClick?: () => void }) {
  const isDesktop = useMediaQuery({ minWidth: '1000px' });

  return (
    <Grid container>
      <CustomGrid
        container
        item
        xs={12}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        px="16px"
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <img src={logo} alt="logo" width="120px" height="125px" />
          <Title size={1}>SEMADEC</Title>
        </Box>
        {isDesktop ? (
          <HeaderWebContent />
        ) : (
          <HeaderMobileContent onClick={onClick} />
        )}
      </CustomGrid>
    </Grid>
  );
}

export default Header;

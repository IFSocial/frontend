import React from 'react';

import { Box, Grid } from '@mui/material';

import { CustomGrid, Title, ColorButton } from './styles';

function Footer({ onClick }: { onClick?: () => void }) {
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
        px="24px"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Title>
            © Copyright 2022 <br />
            TSI 2020.1
          </Title>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <ColorButton data-testid="sair" onClick={onClick}>
            Sair
          </ColorButton>
        </Box>
      </CustomGrid>
    </Grid>
  );
}

export default Footer;

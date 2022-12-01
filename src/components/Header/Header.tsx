import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Home, QueryBuilder, PhoneAndroid } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Grid, AppBar, IconButton, Popover } from '@mui/material';

import logo from '../../assets/logo.png';
import { CustomGrid, Link, LinkMobile, Title } from './styles';

function Header() {
  const isDesktop = useMediaQuery({ minWidth: '1000px' });

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? 'popover' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Grid container>
        <CustomGrid container item xs={12}>
          {isDesktop ? (
            <>
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
                  <AccountCircleIcon
                    style={{ fontSize: '5rem', color: '#fff' }}
                  />
                </Link>
              </Box>
            </>
          ) : (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <img src={logo} alt="logo" width="120px" height="125px" />
                <Title size={1}>SEMADEC</Title>
              </Box>

              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
              >
                <MenuIcon
                  style={{
                    fontSize: '2.5rem',
                    color: '#fff',
                    marginRight: '8px',
                  }}
                />
              </IconButton>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <Box display="flex" flexDirection="column" p="24px" gap={3}>
                  <Box display="flex" flexDirection="row" gap={1}>
                    <Home />
                    <LinkMobile
                      itemID="home-popover"
                      href="/home"
                      underline="none"
                      color="#000"
                    >
                      Home
                    </LinkMobile>
                  </Box>
                  <Box display="flex" flexDirection="row" gap={1}>
                    <QueryBuilder />
                    <LinkMobile
                      itemID="horarios-popover"
                      href="/horarios"
                      underline="none"
                      color="#000"
                    >
                      Horários
                    </LinkMobile>
                  </Box>
                  <Box display="flex" flexDirection="row" gap={1}>
                    <PhoneAndroid />
                    <LinkMobile
                      itemID="contatos-popover"
                      href="/contatos"
                      underline="none"
                      color="#000"
                    >
                      Contatos
                    </LinkMobile>
                  </Box>
                </Box>
              </Popover>
            </Box>
          )}
        </CustomGrid>
      </Grid>
    </AppBar>
  );
}

export default Header;

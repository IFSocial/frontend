import React, { useState } from 'react';

import {
  AccountCircle,
  Home,
  QueryBuilder,
  PhoneAndroid,
  ExitToApp,
} from '@material-ui/icons';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Popover } from '@mui/material';

import { LinkMobile } from './styles';

function HeaderMobileContent({ onClick }: { onClick?: () => void }) {
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
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
        data-testid="hamburger-button"
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
              data-testid="home-popover"
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
              data-testid="horarios-popover"
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
              data-testid="contatos-popover"
              href="/contatos"
              underline="none"
              color="#000"
            >
              Contatos
            </LinkMobile>
          </Box>
          <Box display="flex" flexDirection="row" gap={1}>
            <AccountCircle />
            <LinkMobile
              data-testid="perfil-popover"
              href="/perfil"
              underline="none"
              color="#000"
            >
              Meu perfil
            </LinkMobile>
          </Box>
          <Box display="flex" flexDirection="row" gap={1}>
            <ExitToApp />
            <LinkMobile
              data-testid="sair-popover"
              href="/"
              underline="none"
              color="#000"
              onClick={onClick}
            >
              Sair
            </LinkMobile>
          </Box>
        </Box>
      </Popover>
    </>
  );
}

export default HeaderMobileContent;

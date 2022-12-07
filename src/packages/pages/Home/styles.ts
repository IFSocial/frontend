import { green, deepPurple } from '@material-ui/core/colors';
import { Grid, Button, ButtonProps } from '@mui/material';
import { styled as MUIStyled } from '@mui/material/styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-weight: 800;
  font-size: 72px;
  color: ${({ theme }) => theme.colors.Primary900};
`;

export const Subtitle = styled.p`
  font-size: 24px;
  font-family: 'Montserrat';
  font-weight: 400;
  color: ${({ theme }) => theme.colors.Primary900};
`;

export const Conteudo = styled.p`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0.08em;
`;

export const CustomGrid = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.Primary400};
`;

export const CustomButton1 = MUIStyled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(green[600]),
  backgroundColor: green[800],
  '&:hover': {
    backgroundColor: green[900],
  },
}));

export const CustomButton2 = MUIStyled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(deepPurple[600]),
  backgroundColor: deepPurple[700],
  '&:hover': {
    backgroundColor: deepPurple[900],
  },
}));

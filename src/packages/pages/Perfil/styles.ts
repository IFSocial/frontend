import { green } from '@material-ui/core/colors';
import { Grid, Button, ButtonProps } from '@mui/material';
import { styled as MUIStyled } from '@mui/material/styles';
import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-weight: 800;
  font-size: 72px;
  color: ${({ theme }) => theme.colors.Primary900};
`;

export const Subtitle = styled.h2`
  font-family: 'Montserrat';
  font-weight: 800;
  font-size: 44px;
  color: ${({ theme }) => theme.colors.dark900};
`;

export const CustomGrid = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.Primary400};
`;

export const TituloConteudo = styled.p`
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0.08em;
  word-break: break-all;
`;

export const Conteudo = styled.p`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0.08em;
  word-break: break-all;
`;

export const CustomButton1 = MUIStyled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(green[600]),
  backgroundColor: green[800],
  '&:hover': {
    backgroundColor: green[900],
  },
}));

export const Table = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.Primary400};
  min-height: 200px;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 1px;
`;

export const Row = styled.div`
  min-height: 96px;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1px;
`;

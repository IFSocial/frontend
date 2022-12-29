import { green } from '@material-ui/core/colors';
import { ErrorOutlineOutlined } from '@material-ui/icons';
import { Grid, Button, ButtonProps } from '@mui/material';
import { styled as MUIStyled } from '@mui/material/styles';
import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-weight: 800;
  font-size: 48px;
  color: ${({ theme }) => theme.colors.Primary900};
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

export const CustomIcon = styled(ErrorOutlineOutlined)`
  color: ${({ theme }) => theme.colors.Primary900};
`;

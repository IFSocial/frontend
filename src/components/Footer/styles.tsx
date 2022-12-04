import { pink } from '@material-ui/core/colors';
import { Grid } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled as MUIStyled } from '@mui/material/styles';
import styled from 'styled-components';

import { Text } from '../../packages/ui-kit';

export const CustomGrid = styled(Grid)`
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.Primary700};
`;

export const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.dark900};
`;

export const ColorButton = MUIStyled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(pink[700]),
  backgroundColor: pink[600],
  '&:hover': {
    backgroundColor: pink[800],
  },
}));

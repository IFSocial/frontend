import { green } from '@material-ui/core/colors';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button, ButtonProps, Grid } from '@mui/material';
import { styled as MUIStyled } from '@mui/material/styles';
import styled from 'styled-components';

import { Text } from '../../ui-kit';

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.Neutral0};
`;

export const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.Neutral0};
`;

export const LabelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const CustomGridLeft = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.Primary900};
`;

export const CustomImage = styled.img`
  max-width: 500px;
  max-height: 450px;
`;

export const CustomIcon = styled(AccountCircleIcon)`
  color: ${({ theme }) => theme.colors.Primary800};
`;

export const CustomButton1 = MUIStyled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(green[600]),
  backgroundColor: green[800],
  '&:hover': {
    backgroundColor: green[900],
  },
}));

export const CustomButton2 = MUIStyled(Button)<ButtonProps>(() => ({
  color: green[900],
  backgroundColor: green[100],
  '&:hover': {
    backgroundColor: green[200],
  },
}));

export const CustomText = styled(Text)`
  color: ${({ theme }) => theme.colors.Primary800};
`;

import { Grid } from '@mui/material';
import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-weight: 800;
  font-size: 72px;
  color: ${({ theme }) => theme.colors.Primary900};
`;

export const CustomGrid = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.Primary400};
`;

export const Conteudo = styled.p`
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0.08em;
  word-break: break-all;
`;

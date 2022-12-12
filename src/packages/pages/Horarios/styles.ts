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

export const TituloConteudo = styled.p`
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 20px;
  line-height: 100%;
  word-break: break-all;
`;

export const Conteudo = styled.p`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0.08em;
  word-break: break-all;
`;

export const Table = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.Primary400};
  min-height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Row = styled.div`
  min-height: 96px;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Cell = styled.div`
  width: 20%;
`;

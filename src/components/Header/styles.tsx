import { Link as CustomLink, Grid } from '@mui/material';
import styled from 'styled-components';

import { Heading } from '../../packages/ui-kit';

export const Link = styled(CustomLink)`
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Montserrat Alternates';
`;

export const LinkMobile = styled(CustomLink)`
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Montserrat Alternates';
`;

export const CustomGrid = styled(Grid)`
  font-size: 1.2rem;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.Primary900};
`;

export const Title = styled(Heading)`
  color: ${({ theme }) => theme.colors.Neutral0};
`;

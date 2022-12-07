import styled from 'styled-components';

export type StyledHeadingProps = {
  /**
   * How large should the heading be?
   */
  size: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Heading1 = styled.h1`
  margin: 0px;
  ${({ theme }) => theme.typography.heading1};
`;

export const Heading2 = styled.h2`
  margin: 0px;
  ${({ theme }) => theme.typography.heading2};
`;

export const Heading3 = styled.h3`
  margin: 0px;
  ${({ theme }) => theme.typography.heading3};
`;

export const Heading4 = styled.h4`
  margin: 0px;
  ${({ theme }) => theme.typography.heading4};
`;

export const Heading5 = styled.h5`
  margin: 0px;
  ${({ theme }) => theme.typography.heading5};
`;

export const Heading6 = styled.h6`
  margin: 0px;
  ${({ theme }) => theme.typography.heading6};
`;

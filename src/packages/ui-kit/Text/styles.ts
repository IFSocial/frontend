import styled, { css } from 'styled-components';

export type StyledTextProps = {
  /**
   * Text size.
   */
  size: 1 | 2 | 3;
};

const sizeModifiers = {
  1: ({ theme }) => css`
    ${theme.typography.text1};
  `,
  2: ({ theme }) => css`
    ${theme.typography.text2};
  `,
  3: ({ theme }) => css`
    ${theme.typography.text3};
  `,
};

export const Text = styled.p<StyledTextProps>`
  ${({ size }) => sizeModifiers[size]}
`;

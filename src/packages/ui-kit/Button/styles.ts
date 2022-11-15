import styled, { css } from 'styled-components';

export type StyledButtonProps = {
  /**
   * If `true`, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * How large should the button be?
   */
  size: 'small' | 'medium' | 'large';
  /**
   * Which color the button will be?
   */
  variant:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'successSecondary'
    | 'danger'
    | 'dangerSecondary';
  /**
   * If `true`, the button will show loading state.
   */
  loading: boolean;
};

const sizeModifier = {
  large: css`
    padding: 12px 16px;
  `,
  medium: css`
    padding: 10px 16px;
  `,
  small: css`
    padding: 8px 16px;
  `,
};

const typeModifier = {
  primary: css`
    color: ${({ theme }) => theme.colors.Neutral0};
    background: ${({ theme }) => theme.colors.Primary600};
    &:hover {
      background: ${({ theme }) => theme.colors.Primary500};
    }
    &:active {
      background: ${({ theme }) => theme.colors.Primary700};
    }
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.Primary600};
    border: 1px solid ${({ theme }) => theme.colors.Primary100};
    background: ${({ theme }) => theme.colors.Primary100};
    &:hover {
      background: ${({ theme }) => theme.colors.Neutral0};
    }
    &:active {
      color: ${({ theme }) => theme.colors.Primary700};
      background: ${({ theme }) => theme.colors.Neutral0};
    }
  `,
  tertiary: css`
    color: ${({ theme }) => theme.colors.Neutral150};
    background: ${({ theme }) => theme.colors.Neutral0};
    &:hover {
      background: ${({ theme }) => theme.colors.Neutral100};
    }
    &:active {
      color: ${({ theme }) => theme.colors.Neutral150};
      background: ${({ theme }) => theme.colors.Neutral150};
    }
  `,
  success: css`
    color: ${({ theme }) => theme.colors.Neutral0};
    background: ${({ theme }) => theme.colors.Success600};
    &:hover {
      background: ${({ theme }) => theme.colors.Success500};
    }
    &:active {
      background: ${({ theme }) => theme.colors.Success700};
    }
  `,
  successSecondary: css`
    color: ${({ theme }) => theme.colors.Success600};
    border: 1px solid ${({ theme }) => theme.colors.Success500};
    background: ${({ theme }) => theme.colors.Success100};
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.Success500};
      background: ${({ theme }) => theme.colors.Neutral0};
    }
    &:active {
      border: 1px solid ${({ theme }) => theme.colors.Success700};
      background: ${({ theme }) => theme.colors.Neutral0};
    }
  `,
  danger: css`
    color: ${({ theme }) => theme.colors.Neutral0};
    border: 1px solid ${({ theme }) => theme.colors.Neutral150};
    background: ${({ theme }) => theme.colors.Danger600};
    &:hover {
      background: ${({ theme }) => theme.colors.Danger500};
    }
    &:active {
      background: ${({ theme }) => theme.colors.Danger700};
    }
  `,
  dangerSecondary: css`
    color: ${({ theme }) => theme.colors.Danger600};
    border: 1px solid ${({ theme }) => theme.colors.Danger500};
    background: ${({ theme }) => theme.colors.Danger100};
    &:hover {
      background: ${({ theme }) => theme.colors.Neutral0};
    }
    &:active {
      color: ${({ theme }) => theme.colors.Danger600};
      border: 1px solid ${({ theme }) => theme.colors.Danger700};
      background: ${({ theme }) => theme.colors.Neutral0};
    }
  `,
};

export const Button = styled.button<StyledButtonProps>`
  align-items: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  ${({ size = 'large' }) => sizeModifier[size]}
  ${({ variant = 'primary' }) => typeModifier[variant]}
  &:focus {
    box-shadow: 0 0 0 0.075rem ${({ theme }) => theme.colors.Neutral0},
      0 0 0 0.2rem ${({ theme }) => theme.colors.Primary700};
  }
  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.Neutral150};
    color: ${({ theme }) => theme.colors.Neutral150};
  }
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.Neutral0};
  margin-right: 8px;
  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
  animation: loading 0.6s linear infinite;
`;

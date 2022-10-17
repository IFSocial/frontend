import React, { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';

import * as Styled from './styles';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Partial<Styled.StyledButtonProps> {
  /**
   * Button contents.
   */
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    disabled,
    variant = 'primary',
    size = 'medium',
    type = 'button',
    loading = false,
    ...rest
  },
  ref,
) {
  return (
    <Styled.Button
      ref={ref}
      size={size}
      type={type}
      variant={variant}
      disabled={!!disabled}
      loading={loading}
      {...rest}
    >
      {loading && <Styled.Dot />}
      {children}
    </Styled.Button>
  );
});

export default Button;

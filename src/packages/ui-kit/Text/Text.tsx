import React, { BaseHTMLAttributes, forwardRef, ReactNode } from 'react';

import * as Styled from './styles';

export interface TextProps
  extends BaseHTMLAttributes<HTMLParagraphElement>,
    Partial<Styled.StyledTextProps> {
  /**
   * Text content.
   */
  children: ReactNode;
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(function Text(
  { children, size = 1, ...rest },
  ref,
) {
  return (
    <Styled.Text ref={ref} size={size} {...rest}>
      {children}
    </Styled.Text>
  );
});

export default Text;

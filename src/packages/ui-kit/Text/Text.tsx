import React, { BaseHTMLAttributes, ReactNode } from 'react';

import * as Styled from './styles';

export interface TextProps
  extends BaseHTMLAttributes<HTMLParagraphElement>,
    Partial<Styled.StyledTextProps> {
  /**
   * Text content.
   */
  children: ReactNode;
}

function Text({ children, size = 1, ...rest }: TextProps) {
  return (
    <Styled.Text size={size} {...rest}>
      {children}
    </Styled.Text>
  );
}

export default Text;

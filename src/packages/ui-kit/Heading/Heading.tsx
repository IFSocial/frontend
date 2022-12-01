import React, { BaseHTMLAttributes, forwardRef, ReactNode } from 'react';

import * as Styled from './styles';

export interface HeadingProps
  extends BaseHTMLAttributes<HTMLHeadingElement>,
    Partial<Styled.StyledHeadingProps> {
  /**
   * Heading content.
   */
  children: ReactNode;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(
  { children, size = 1, ...rest },
  ref,
) {
  switch (size) {
    case 2:
      return (
        <Styled.Heading2 ref={ref} {...rest}>
          {children}
        </Styled.Heading2>
      );
    case 3:
      return (
        <Styled.Heading3 ref={ref} {...rest}>
          {children}
        </Styled.Heading3>
      );
    case 4:
      return (
        <Styled.Heading4 ref={ref} {...rest}>
          {children}
        </Styled.Heading4>
      );
    case 5:
      return (
        <Styled.Heading5 ref={ref} {...rest}>
          {children}
        </Styled.Heading5>
      );
    case 6:
      return (
        <Styled.Heading6 ref={ref} {...rest}>
          {children}
        </Styled.Heading6>
      );
    case 1:
    default:
      return (
        <Styled.Heading1 ref={ref} {...rest}>
          {children}
        </Styled.Heading1>
      );
  }
});

export default Heading;

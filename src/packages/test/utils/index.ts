import { render, RenderOptions } from '@testing-library/react';

import Wrapper from './Wrapper';

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };

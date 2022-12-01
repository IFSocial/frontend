import React from 'react';

import { Text } from '.';
import { render } from '../../test/utils';

describe('Text', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Text>Text</Text>);

    const textElement = getByText('Text');

    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent(/^Text$/);

    expect(textElement).toMatchSnapshot();
  });

  it('should render a text 1', () => {
    const { getByText } = render(<Text size={1}>Text</Text>);

    const textElement = getByText('Text');

    expect(textElement).toBeInTheDocument();

    expect(textElement).toMatchSnapshot();
  });

  it('should render a text 2', () => {
    const { getByText } = render(<Text size={2}>Text</Text>);

    const textElement = getByText('Text');

    expect(textElement).toBeInTheDocument();

    expect(textElement).toMatchSnapshot();
  });

  it('should render a text 3', () => {
    const { getByText } = render(<Text size={3}>Text</Text>);

    const textElement = getByText('Text');

    expect(textElement).toBeInTheDocument();

    expect(textElement).toMatchSnapshot();
  });
});

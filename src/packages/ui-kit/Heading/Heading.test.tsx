import React from 'react';

import { Heading } from '.';
import { render } from '../../test/utils';

describe('Heading', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<Heading>Heading</Heading>);

    const headingElement = getByRole('heading');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(/^Heading$/);

    expect(headingElement).toMatchSnapshot();
  });

  it('should render a heading 1', () => {
    const { getByRole } = render(<Heading size={1}>Heading</Heading>);

    const headingElement = getByRole('heading');

    expect(headingElement).toBeInTheDocument();

    expect(headingElement).toMatchSnapshot();
  });

  it('should render a heading 2', () => {
    const { getByRole } = render(<Heading size={2}>Heading</Heading>);

    const headingElement = getByRole('heading');

    expect(headingElement).toBeInTheDocument();

    expect(headingElement).toMatchSnapshot();
  });

  it('should render a heading 3', () => {
    const { getByRole } = render(<Heading size={3}>Heading</Heading>);

    const headingElement = getByRole('heading');

    expect(headingElement).toBeInTheDocument();

    expect(headingElement).toMatchSnapshot();
  });

  it('should render a heading 4', () => {
    const { getByRole } = render(<Heading size={4}>Heading</Heading>);

    const headingElement = getByRole('heading');

    expect(headingElement).toBeInTheDocument();

    expect(headingElement).toMatchSnapshot();
  });

  it('should render a heading 5', () => {
    const { getByRole } = render(<Heading size={5}>Heading</Heading>);

    const headingElement = getByRole('heading');

    expect(headingElement).toBeInTheDocument();

    expect(headingElement).toMatchSnapshot();
  });

  it('should render a heading 6', () => {
    const { getByRole } = render(<Heading size={6}>Heading</Heading>);

    const headingElement = getByRole('heading');

    expect(headingElement).toBeInTheDocument();

    expect(headingElement).toMatchSnapshot();
  });
});

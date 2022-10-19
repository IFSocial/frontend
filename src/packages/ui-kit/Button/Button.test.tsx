import React from 'react';

import { Button } from '.';
import { act, fireEvent, render } from '../../test/utils';

describe('Button', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<Button>Button</Button>);

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(/^Button$/);
    expect(buttonElement).toHaveAttribute('type', 'button');
    expect(buttonElement).toBeEnabled();

    expect(buttonElement).toMatchSnapshot();
  });

  it('should render a primary button', () => {
    const { getByRole } = render(<Button variant="primary">Button</Button>);

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();

    expect(buttonElement).toMatchSnapshot();
  });

  it('should render a secondary button', () => {
    const { getByRole } = render(<Button variant="secondary">Button</Button>);

    const buttonElement = getByRole('button');

    expect(getByRole('button')).toBeInTheDocument();

    expect(buttonElement).toMatchSnapshot();
  });

  it('should render a small button', () => {
    const { getByRole } = render(<Button size="small">Button</Button>);

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();

    expect(buttonElement).toMatchSnapshot();
  });

  it('should render a medium button', () => {
    const { getByRole } = render(<Button size="medium">Button</Button>);

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();

    expect(buttonElement).toMatchSnapshot();
  });

  it('should render a large button', () => {
    const { getByRole } = render(<Button size="large">Button</Button>);

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();

    expect(buttonElement).toMatchSnapshot();
  });

  it('should render a submit button', () => {
    const { getByRole } = render(<Button type="submit">Button</Button>);

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'submit');

    expect(buttonElement).toMatchSnapshot();
  });

  it('can have onClick', () => {
    const handleClick = jest.fn();

    const { getByRole } = render(<Button onClick={handleClick}>Button</Button>);

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can have focus', () => {
    const { getByRole } = render(<Button>Button</Button>);

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();

    act(() => {
      fireEvent.keyDown(document.body, { key: 'TAB' });
      buttonElement.focus();
    });

    expect(buttonElement).toHaveFocus();

    expect(buttonElement).toMatchSnapshot();
  });
});

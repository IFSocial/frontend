import React from 'react';

import { fireEvent, render } from '../../test/utils';
import Card from './Card';

describe('Card', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Card subtitle="" image="" onClick={jest.fn()} />,
    );

    const CardComponent = getByTestId('Card');

    expect(CardComponent).toBeInTheDocument();

    expect(CardComponent).toMatchSnapshot();
  });
  it('should be clickable', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Card subtitle="" image="" onClick={handleClick} />,
    );

    const CardComponent = getByTestId('Card');

    fireEvent.click(CardComponent);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('should have title, subtitle and image', () => {
    const { getByText, getByTestId } = render(
      <Card
        title="Title"
        subtitle="Subtitle"
        image="Image"
        onClick={jest.fn()}
      />,
    );

    const Title = getByText('Title');
    const Subtitle = getByText('Subtitle');
    const Image = getByTestId('card-image');

    expect(Title).toBeInTheDocument();
    expect(Subtitle).toBeInTheDocument();
    expect(Image).toBeInTheDocument();
  });
  it('should have subtitle and image only', () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <Card subtitle="Subtitle" image="Image" onClick={jest.fn()} />,
    );

    const Title = queryByTestId('card-title');
    const Subtitle = getByText('Subtitle');
    const Image = getByTestId('card-image');

    expect(Title).not.toBeInTheDocument();
    expect(Subtitle).toBeInTheDocument();
    expect(Image).toBeInTheDocument();
  });
});

import React from 'react';

import * as Styled from './styles';

export interface CardProps extends Styled.StyledCardProps {
  title?: string;
  subtitle: string;
  image: string;
  onClick: () => void;
}

function Card({ title, subtitle, image, onClick }: CardProps) {
  return (
    <Styled.Card onClick={onClick} data-testid="Card">
      <Styled.Title>{title}</Styled.Title>
      <Styled.ImageWrapper>
        <Styled.Image
          data-testid="card-image"
          src={image}
          alt="Imagem do Card"
        />
      </Styled.ImageWrapper>
      <Styled.Subtitle>{subtitle}</Styled.Subtitle>
    </Styled.Card>
  );
}

export default Card;

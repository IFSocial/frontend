import styled from 'styled-components';

export type StyledCardProps = {
  size?: 'small' | 'default';
};

export const Card = styled.div`
  width: 212px;
  height: 265px;
  background: ${({ theme }) => theme.colors.Primary700};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.dark900};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  padding: 8px;
`;

export const Title = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 25px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.Primary900};
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 70%;
  height: auto !important;
  object-fit: scale-down;
`;

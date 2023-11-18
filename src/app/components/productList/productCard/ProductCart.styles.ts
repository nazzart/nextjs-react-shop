import styled from "styled-components";

export const Card = styled.div`
  text-align: center;
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  background: white;
  opacity: 0;
  transition: opacity 0.5s ease-out;
  -moz-transition: opacity 0.5s ease-out;
  -webkit-transition: opacity 0.5s ease-out;
  -o-transition: opacity 0.5s ease-out;
`;

export const Description = styled.p``;

export const Price = styled.p`
  font-weight: bold;
`;

export const ImageBlock = styled.div`
  position: relative;

  &:hover ${Meta} {
    opacity: 1;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
  font-size: ${({ theme }) => `${theme.fontSizes.small}`};
`;

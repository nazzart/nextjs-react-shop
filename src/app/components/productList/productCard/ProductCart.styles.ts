import styled from "styled-components";

export const Card = styled.div`
  text-align: center;  
`;


export const Description = styled.div`
  position: absolute;
  bottom: 0;
  left:0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  background: white;
  opacity: 0;
  transition: opacity .5s ease-out;
    -moz-transition: opacity .5s ease-out;
    -webkit-transition: opacity .5s ease-out;
    -o-transition: opacity .5s ease-out;
`;

export const ImageBlock = styled.div`
position: relative;

&:hover ${Description} {
  opacity: 1;
}
`

export const Title = styled.h2`
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
  font-size: ${({ theme }) => `${theme.fontSizes.small}`};
`;

import styled from "styled-components";

export const Footer = styled.div`
  padding-top: 20px;
`;

export const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => `${theme.fontSizes.small}`};
`;

export const Text= styled.p`
   font-size: ${({ theme }) => `${theme.fontSizes.small}`}; 
`;

export const ShippingPrice = styled.span`
  color: ${({ theme }) => `${theme.colors.lightGray}`};
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: ${({ theme }) => `1px solid ${theme.colors.lightGray}`};
  font-size: ${({ theme }) => `${theme.fontSizes.small}`};
`;
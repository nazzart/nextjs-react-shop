import styled from "styled-components";


export const Popover = styled.div`
  position: relative;
  float: right;

    &.active:before {
        content: "";
        display: block;
        position: absolute;
        right: 7px;
        top: 30px;
        width: 10px;
        height: 10px;
        background-color: white;
        -webkit-transform: translateY(-50%) rotate(45deg);
        -moz-transform: translateY(-50%) rotate(45deg);
        -ms-transform: translateY(-50%) rotate(45deg);
        transform: translateY(-50%) rotate(45deg);
        z-index: 1;
    
  }
`;

export const Content = styled.div`
  position: absolute;
  background: white;
  top: 30px;
  right: -20px;
  width: 370px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 24px 0px;
  padding: 15px 20px;
`;

export const MainTitle = styled.p``;

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
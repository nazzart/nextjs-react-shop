import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.lightGray}`};
  padding-top: 15px;
  padding-bottom: 15px;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemContent = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const ItemTitle = styled.h3`
  margin: 0px;
`;
export const ItemQuantity = styled.p`
  font-size: ${({ theme }) => `${theme.fontSizes.small}`};
  margin-top: 5px;
`;

export const ItemPrice = styled.p`
  font-size: 18px;
 font-weight: bold;
 margin: 0;
`;

export const Description = styled.div``;

export const RemoveButton = styled.div`
  display: flex;
  align-self: flex-end;
  text-decoration: underline;
  font-size: ${({ theme }) => `${theme.fontSizes.small}`};
  cursor:pointer;

`;

import styled from "styled-components";

export const Popover = styled.div`
  position: relative;
  float: right;
  z-index: 1;

  &.active:before {
    content: "";
    display: block;
    position: absolute;
    right: 30px;
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
  right: 0px;
  width: 370px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 24px 0px;
  padding: 15px 20px;
`;

export const CartContent = styled.div`
  max-height: 300px;
  overflow: scroll;
`;

export const IconWrapper = styled.div`
  position: relative;
  cursor: pointer;
  padding-right: 25px;
`;

export const Badge = styled.div`
  position: relative;
  background: ${({ theme }) => `${theme.colors.primary}`};
  color: white;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -35px;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  left: 10px;
`;

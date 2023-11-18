"use client";
import { FC, useEffect, useRef, useState } from "react";
import IconCart from "../icons/IconCart";
import { Popover, Content, CartContent, Badge, IconWrapper } from "./CartPopover.styles";
import CartBody from "../cart/cartBody/CartBody";
import Button from "../buttons/Button";
import CartHeader from "../cart/cartHeader/CartHeader";
import CartFooter from "../cart/cartFooter/CartFooter";
import useCart from "@/app/hooks/useCart";
import { useRouter } from 'next/navigation';

const CartPopover: FC = () => {
  const { cartItems } = useCart();
  const [isOpen, setOpen] = useState<boolean>(false);
  const popoverElement = useRef<HTMLDivElement>(null);
  const { push } = useRouter();

  const closeWhenClickOutside = (e: MouseEvent) => {
    if (
      popoverElement.current &&
      !popoverElement.current.contains(e.target as Node)
    ) {
      setOpen(false);
    }
  };

  const redirectTo = () => {
    push('/cart');
    setOpen(false)
  }

  useEffect(() => {
    document.addEventListener("click", closeWhenClickOutside);
  }, []);

  return (
    <Popover ref={popoverElement} className={isOpen ? "active" : ""}>
      <IconWrapper onClick={() => setOpen(!isOpen)}>
        <IconCart
          size={24}
        />
        {cartItems.length > 0 && <Badge>{cartItems.length}</Badge>}
      </IconWrapper>
      
      {isOpen && (
        <Content>
          <CartHeader totalCount={cartItems.length} />
          <CartContent>
            <CartBody cartItems={cartItems} />
          </CartContent>
          {cartItems.length > 0 && (
            <>
              <CartFooter cartItems={cartItems} />
              <Button onClick={() => redirectTo()}>
                Next step
              </Button>
            </>
          )}
        </Content>
      )}
    </Popover>
  );
};
export default CartPopover;

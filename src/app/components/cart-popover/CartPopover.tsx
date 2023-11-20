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
  // Cart hook
  const { cartItems } = useCart();

  // Contains boolean if popover is open
  const [isOpen, setOpen] = useState<boolean>(false);

  // Reference to the popover html element
  const popoverElement = useRef<HTMLDivElement>(null);

  // Include the router from navigation
  const { push } = useRouter();

  // Method to close the popover if the user clicks outside of it
  const closeWhenClickOutside = (e: MouseEvent) => {
    if (
      popoverElement.current &&
      !popoverElement.current.contains(e.target as Node)
    ) {
      setOpen(false);
    }
  };

  // Redirect to cart page on button click
  const redirectTo = () => {
    setOpen(false)
    push('/cart');
  }

  // Side effect, register the listener
  useEffect(() => {
    document.addEventListener("click", closeWhenClickOutside);
  }, []);

  return (
    <Popover ref={popoverElement} className={isOpen ? "active" : ""}>
      <IconWrapper onClick={() => setOpen(!isOpen)} data-testid="icon-wrapper">
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
              <Button color="secondary" onClick={() => redirectTo()} >
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

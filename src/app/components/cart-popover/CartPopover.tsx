"use client";
import { FC, useEffect, useRef } from "react";
import { Popover, Content, CartContent } from "./CartPopover.styles";
import CartBody from "../cart/cartBody/CartBody";
import Button from "../buttons/Button";
import CartHeader from "../cart/cartHeader/CartHeader";
import CartFooter from "../cart/cartFooter/CartFooter";
import useCart from "@/app/hooks/useCart";
import { useRouter } from 'next/navigation';

const CartPopover: FC<{onClose:(status: boolean) => void}> = (props) => {
  // Cart hook
  const { cartItems } = useCart();

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
      props.onClose(true);
    }
  };

  // Redirect to cart page on button click
  const redirectTo = () => {
    props.onClose(true)
    push('/cart');
  }

  // Side effect, register the listener
  useEffect(() => {
    document.addEventListener("click", closeWhenClickOutside);
  }, []);

  return (
    <Popover ref={popoverElement} data-testid="cart-popover">
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
    </Popover>
  );
};
export default CartPopover;

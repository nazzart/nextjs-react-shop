"use client";
import Button from "../components/buttons/Button";
import CartBody from "../components/cart/cartBody/CartBody";
import CartFooter from "../components/cart/cartFooter/CartFooter";
import CartHeader from "../components/cart/cartHeader/CartHeader";
import useCart from "../hooks/useCart";

export default function Cart() {
  // Cart hook
  const { cartItems } = useCart();

  return (
    <>
      <CartHeader totalCount={cartItems.length} />
      <CartBody cartItems={cartItems} />
      {cartItems.length > 0 && (
        <>
          <CartFooter cartItems={cartItems} />
          <Button size="large" color="primary">Continue to shipping</Button>
        </>
      )}
    </>
  );
}

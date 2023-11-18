import { FC } from "react";
import CartItem from "../cartItem/CartItem";
import { Product } from "@/models/product.interface";

const CartBody: FC<{ cartItems: Product[] }> = (props) => {
  return (
    <>
      {props.cartItems.length < 1 ? (
        <p>There are no items in your cart yet.</p>
      ) : (
        props.cartItems.map((item, id) => <CartItem key={id} item={item} />)
      )}
    </>
  );
};

export default CartBody;

import { Product } from "@/models/product.interface";
import useCart from "./useCart";

const useRemoveItem = () => {
  const { cartItems, setCartItems } = useCart();

  const removeItem = (product: Product) => {
    // copy of the cart items
    const currentCartItems = [...cartItems];

    // check the existing items
    const existingCartItem = currentCartItems.find(
      (item) => item.id === product.id
    );

    // if the product exists in the cart
    if (existingCartItem) {
      if (existingCartItem.quantity! > 1) {
        // update quantity by minus one value
        existingCartItem.quantity! -= 1;
      } else {
        // completely remove the item
        currentCartItems.splice(currentCartItems.indexOf(existingCartItem), 1);
      }
    } 

    setCartItems(currentCartItems);
  };

  return { removeItem };
};

export default useRemoveItem;
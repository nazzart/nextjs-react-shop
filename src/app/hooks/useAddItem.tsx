import { Product } from "@/models/product.interface";
import useCart from "./useCart";

const useAddItem = () => {
  const { cartItems, setCartItems } = useCart();

  const addItem = (product: Product) => {
    // copy of the cart items
    const currentCartItems = [...cartItems];

    // check the existing items
    const existingCartItem = currentCartItems.find(
      (item) => item.id === product.id
    );

    // if the product exists in the cart
    if (existingCartItem) {
      existingCartItem.quantity! += 1;
    } else {
      // If the product is not in the cart, add it
      currentCartItems.push({
        ...product,
        quantity: 1,
      });
    }

    // update the cart items
    setCartItems(currentCartItems);
  };

  return { addItem };
};

export default useAddItem;
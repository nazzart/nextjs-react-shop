"use client"
import { Product } from "@/models/product.interface";
import { createContext, useState } from "react";

interface CartItemsContext {
  cartItems: Product[];
  setCartItems: (cartItems: Product[]) => void;
}

export const CartItemsContext = createContext<CartItemsContext>({
  cartItems: [],
  setCartItems: () => {},
});

export const CartItemsProvider = ({ children }: any) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    return (
      <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
        {children}
      </CartItemsContext.Provider>
    );
  };